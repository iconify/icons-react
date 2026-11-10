import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t231jhb6t.css';
import '../../css/n/npv132b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t231jhb6t"/><path clip-rule="evenodd" class="npv132b_u"/></g>`,
		"fallback": "andrsrxn:heart-scan",
	});
}

export default Component;
