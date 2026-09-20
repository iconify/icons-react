import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr-u5pbye.css';
import '../../css/i/i8zp6bckl.css';
import '../../css/r/rm076e2fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wr-u5pbye"/><path class="i8zp6bckl"/><path class="rm076e2fp"/></g>`,
		"fallback": "solar:chat-round-line-bold-duotone",
	});
}

export default Component;
