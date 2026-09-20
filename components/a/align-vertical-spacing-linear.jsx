import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yszjebc_r.css';
import '../../css/j/jlzv4qbob.css';
import '../../css/q/qv_d-ebdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yszjebc_r"/><path class="jlzv4qbob"/><path class="qv_d-ebdy"/></g>`,
		"fallback": "solar:align-vertical-spacing-linear",
	});
}

export default Component;
