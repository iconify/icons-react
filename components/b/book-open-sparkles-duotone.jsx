import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h36d5abrd.css';
import '../../css/j/j6nil5mjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h36d5abrd secondary"/><path class="j6nil5mjx primary"/></g>`,
		"fallback": "iconaut:book-open-sparkles-duotone",
	});
}

export default Component;
