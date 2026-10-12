import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifivxibrp.css';
import '../../css/u/utgcn4qui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ifivxibrp"/><path class="utgcn4qui"/></g>`,
		"fallback": "andrsrxn:calendar-out",
	});
}

export default Component;
