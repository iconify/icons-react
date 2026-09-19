import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngu4_f8us.css';
import '../../css/p/pgti7zwct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ngu4_f8us"/><path clip-rule="evenodd" class="pgti7zwct"/></g>`,
		"fallback": "healthicons:chart-death-rate-decreasing-outline-24px",
	});
}

export default Component;
