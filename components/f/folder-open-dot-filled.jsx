import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0q4k-bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0q4k-bre"/>`,
		"fallback": "lucide-extended:folder-open-dot-filled",
	});
}

export default Component;
