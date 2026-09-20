import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq3f2yo5h.css';
import '../../css/a/apdyybk6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cq3f2yo5h"/><path class="apdyybk6j"/></g>`,
		"fallback": "reicon:chat-round-check-duotone",
	});
}

export default Component;
