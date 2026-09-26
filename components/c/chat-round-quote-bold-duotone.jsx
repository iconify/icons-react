import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/y/y3_1y9bmd.css';
import '../../css/j/jl5x515oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bym8zsb_r"/><path clip-rule="evenodd" class="y3_1y9bmd"/><path clip-rule="evenodd" class="jl5x515oe"/></g>`,
		"fallback": "solar:chat-round-quote-bold-duotone",
	});
}

export default Component;
