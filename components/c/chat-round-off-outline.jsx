import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwf2--g_o.css';
import '../../css/x/xc61dvbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hwf2--g_o"/><path class="xc61dvbju"/></g>`,
		"fallback": "solar:chat-round-off-outline",
	});
}

export default Component;
