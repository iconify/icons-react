import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ci1x_rbrb.css';
import '../../css/y/y4chwetsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ci1x_rbrb"/><path class="y4chwetsg"/></g>`,
		"fallback": "coolicons:chart-waterfall-bulk-round",
	});
}

export default Component;
