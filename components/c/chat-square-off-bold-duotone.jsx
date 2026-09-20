import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3ai597mg.css';
import '../../css/h/h2ep6hbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3ai597mg"/><path class="h2ep6hbtb"/></g>`,
		"fallback": "solar:chat-square-off-bold-duotone",
	});
}

export default Component;
