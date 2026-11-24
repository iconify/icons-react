import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6fsr3b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6fsr3b1a"/>`,
		"fallback": "lucide-extended:car-filled",
	});
}

export default Component;
