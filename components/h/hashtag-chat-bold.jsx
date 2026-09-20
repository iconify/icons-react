import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9_o9vx6i.css';
import '../../css/f/fplnp_asx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9_o9vx6i"/><path clip-rule="evenodd" class="fplnp_asx"/></g>`,
		"fallback": "solar:hashtag-chat-bold",
	});
}

export default Component;
