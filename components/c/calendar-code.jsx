import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifivxibrp.css';
import '../../css/l/lb_dztbhu.css';
import '../../css/z/zb2hj3dia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ifivxibrp"/><path class="lb_dztbhu"/><path class="zb2hj3dia"/></g>`,
		"fallback": "andrsrxn:calendar-code",
	});
}

export default Component;
