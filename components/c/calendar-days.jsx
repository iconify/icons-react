import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/o/ovocp5a6o.css';
import '../../css/l/liegl_bla.css';
import '../../css/y/y5aloinyc.css';
import '../../css/q/qg1g-jbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="ovocp5a6o"/><path class="liegl_bla"/><path class="y5aloinyc"/><path class="qg1g-jbjs"/></g>`,
		"fallback": "withicons-retro:calendar-days",
	});
}

export default Component;
