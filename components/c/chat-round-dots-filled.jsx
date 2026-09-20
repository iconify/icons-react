import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2_s5abax.css';
import '../../css/o/o6p4fbc3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p2_s5abax"/><path class="o6p4fbc3l"/></g>`,
		"fallback": "reicon:chat-round-dots-filled",
	});
}

export default Component;
