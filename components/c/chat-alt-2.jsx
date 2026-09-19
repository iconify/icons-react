import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rv51y6bhv.css';
import '../../css/y/y1ps0521i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rv51y6bhv"/><path class="y1ps0521i"/></g>`,
		"fallback": "heroicons-solid:chat-alt-2",
	});
}

export default Component;
