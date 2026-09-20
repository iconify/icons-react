import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwyhl_vhy.css';
import '../../css/h/h456aebxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwyhl_vhy"/><path class="h456aebxe"/></g>`,
		"fallback": "solar:chat-round-off-bold",
	});
}

export default Component;
