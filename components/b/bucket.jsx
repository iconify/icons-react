import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n79eovbth.css';
import '../../css/l/ltt8_ib4h.css';
import '../../css/t/t5jksacui.css';
import '../../css/a/anhsc6r_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n79eovbth"/><path class="ltt8_ib4h"/><path class="t5jksacui"/><path class="anhsc6r_e"/></g>`,
		"fallback": "andrsrxn:bucket",
	});
}

export default Component;
