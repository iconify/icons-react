import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/h/hb7rexbyy.css';
import '../../css/t/tjhd2sb4c.css';
import '../../css/n/njik0z2gu.css';
import '../../css/d/d0hst6bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="hb7rexbyy"/><path class="tjhd2sb4c"/><path class="njik0z2gu"/><path class="d0hst6bdl"/></g>`,
		"fallback": "withicons-retro:calendar-check",
	});
}

export default Component;
