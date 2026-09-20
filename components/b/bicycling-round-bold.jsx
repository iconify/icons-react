import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-7x4m4nl.css';
import '../../css/a/azd_j_bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-7x4m4nl"/><path clip-rule="evenodd" class="azd_j_bqp"/></g>`,
		"fallback": "solar:bicycling-round-bold",
	});
}

export default Component;
