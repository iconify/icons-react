import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebxwzp8va.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ebxwzp8va"/><circle class="u00ey8bps"/></g>`,
		"fallback": "reicon:chat-unread-filled",
	});
}

export default Component;
