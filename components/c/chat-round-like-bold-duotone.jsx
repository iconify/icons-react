import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/n/n51ljuw_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bym8zsb_r"/><path class="n51ljuw_r"/></g>`,
		"fallback": "solar:chat-round-like-bold-duotone",
	});
}

export default Component;
