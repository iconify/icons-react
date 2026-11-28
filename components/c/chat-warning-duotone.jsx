import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/que2f03vs.css';
import '../../css/w/w3c7l5w_y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="que2f03vs"/><path class="w3c7l5w_y"/></g>`,
		"fallback": "pullo:chat-warning-duotone",
	});
}

export default Component;
