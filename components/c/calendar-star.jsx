import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9xk77xp.css';
import '../../css/o/ozws_4hvo.css';
import '../../css/y/ywo6qqbhu.css';
import '../../css/w/wd2ux_bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-9xk77xp"/><path class="ozws_4hvo"/><path class="ywo6qqbhu"/><path class="wd2ux_bhw"/></g>`,
		"fallback": "andrsrxn:calendar-star",
	});
}

export default Component;
