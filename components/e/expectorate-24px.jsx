import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydqkm3b_q.css';
import '../../css/e/e6r0cm-zy.css';
import '../../css/x/xjtbe4epn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ydqkm3b_q"/><path class="e6r0cm-zy"/><path class="xjtbe4epn"/></g>`,
		"fallback": "healthicons:expectorate-24px",
	});
}

export default Component;
