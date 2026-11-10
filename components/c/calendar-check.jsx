import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2wu9_b-j.css';
import '../../css/w/wd9_y_xym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2wu9_b-j"/><path class="wd9_y_xym"/></g>`,
		"fallback": "andrsrxn:calendar-check",
	});
}

export default Component;
