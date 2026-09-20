import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5_zqlbav.css';
import '../../css/p/pf--1dfjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5_zqlbav"/><path class="pf--1dfjc"/></g>`,
		"fallback": "solar:circle-bottom-down-bold",
	});
}

export default Component;
