import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9pf2iacs.css';
import '../../css/w/w3i0u7fwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9pf2iacs"/><path class="w3i0u7fwc"/></g>`,
		"fallback": "lucide-extended:eraser-duotone",
	});
}

export default Component;
