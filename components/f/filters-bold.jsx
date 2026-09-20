import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oae5odbze.css';
import '../../css/s/stcmdibrh.css';
import '../../css/d/d086ypt1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oae5odbze"/><path class="stcmdibrh"/><path class="d086ypt1k"/></g>`,
		"fallback": "solar:filters-bold",
	});
}

export default Component;
