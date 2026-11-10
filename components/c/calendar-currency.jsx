import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/r/rtv4btn9j.css';
import '../../css/t/tvamh0xhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="rtv4btn9j"/><path class="tvamh0xhw"/></g>`,
		"fallback": "andrsrxn:calendar-currency",
	});
}

export default Component;
