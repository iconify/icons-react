import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujqupuedv.css';
import '../../css/h/hzh37acaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujqupuedv"/><path class="hzh37acaj"/></g>`,
		"fallback": "coolicons:chat-conversation-bulk-round",
	});
}

export default Component;
