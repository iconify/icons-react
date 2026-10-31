import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qh5667bww.css';
import '../../css/o/ox78qebke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qh5667bww"/><path class="ox78qebke"/></g>`,
		"fallback": "coolicons:bike-bulk-round",
	});
}

export default Component;
