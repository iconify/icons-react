import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bgjcjxbvr.css';
import '../../css/h/hxs_g5_ji.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><path class="bgjcjxbvr"/><circle class="hxs_g5_ji"/></g>`,
		"fallback": "system-uicons:calendar-day",
	});
}

export default Component;
