import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7-1wlbee.css';
import '../../css/z/z3shbpbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7-1wlbee"/><path clip-rule="evenodd" class="z3shbpbbd"/></g>`,
		"fallback": "reicon:emoji-square",
	});
}

export default Component;
