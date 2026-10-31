import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/c/cx56nio2v.css';
import '../../css/x/xt_2axjnb.css';
import '../../css/e/e5o_92bzh.css';
import '../../css/u/uexr9hoky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="cx56nio2v"/><path class="xt_2axjnb"/><path class="e5o_92bzh"/><path class="uexr9hoky"/></g>`,
		"fallback": "withicons-retro:calendar-plus",
	});
}

export default Component;
