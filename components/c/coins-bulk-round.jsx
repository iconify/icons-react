import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twxbyebhb.css';
import '../../css/g/gs1q52boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twxbyebhb"/><path class="gs1q52boj"/></g>`,
		"fallback": "coolicons:coins-bulk-round",
	});
}

export default Component;
