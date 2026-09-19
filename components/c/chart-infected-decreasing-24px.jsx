import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ol8-oo8dq.css';
import '../../css/k/kib4dobbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ol8-oo8dq"/><path class="kib4dobbv"/></g>`,
		"fallback": "healthicons:chart-infected-decreasing-24px",
	});
}

export default Component;
