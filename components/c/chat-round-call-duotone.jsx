import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq3f2yo5h.css';
import '../../css/h/h_-ew6blk.css';
import '../../css/o/orz_9qkrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cq3f2yo5h"/><path clip-rule="evenodd" class="h_-ew6blk"/><path class="orz_9qkrs"/></g>`,
		"fallback": "reicon:chat-round-call-duotone",
	});
}

export default Component;
