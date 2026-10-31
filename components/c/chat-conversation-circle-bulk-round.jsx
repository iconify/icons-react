import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1y08ob8c.css';
import '../../css/b/by3cize5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1y08ob8c"/><path class="by3cize5k"/></g>`,
		"fallback": "coolicons:chat-conversation-circle-bulk-round",
	});
}

export default Component;
