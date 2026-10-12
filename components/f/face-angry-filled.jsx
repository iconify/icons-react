import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgqhi0q5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgqhi0q5m"/>`,
		"fallback": "lucide-extended:face-angry-filled",
	});
}

export default Component;
