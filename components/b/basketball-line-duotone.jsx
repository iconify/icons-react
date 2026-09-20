import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_rw3tb2y.css';
import '../../css/h/hfb0qeb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e_rw3tb2y"/><path class="hfb0qeb1l"/></g>`,
		"fallback": "solar:basketball-line-duotone",
	});
}

export default Component;
