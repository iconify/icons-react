import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/w/wzxa38bsa.css';
import '../../css/l/lajl8hbkl.css';
import '../../css/f/f7yctxbxs.css';
import '../../css/c/cv1dqim3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="wzxa38bsa"/><path class="lajl8hbkl"/><path class="f7yctxbxs"/><path class="cv1dqim3v"/></g>`,
		"fallback": "withicons-retro:calendar-heart",
	});
}

export default Component;
