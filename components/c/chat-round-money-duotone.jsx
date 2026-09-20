import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq3f2yo5h.css';
import '../../css/i/im5b9kbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cq3f2yo5h"/><path class="im5b9kbls"/></g>`,
		"fallback": "reicon:chat-round-money-duotone",
	});
}

export default Component;
