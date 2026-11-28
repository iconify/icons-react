import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg1p1fp6l.css';
import '../../css/r/r0y3-ab5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vg1p1fp6l"/><path class="primary r0y3-ab5k"/></g>`,
		"fallback": "iconaut:ai-chat-duotone",
	});
}

export default Component;
