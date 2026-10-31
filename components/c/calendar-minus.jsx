import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/b/b6xcd7edb.css';
import '../../css/f/f-kvnj1bj.css';
import '../../css/v/v8np4sojq.css';
import '../../css/o/o25ttxbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="b6xcd7edb"/><path class="f-kvnj1bj"/><path class="v8np4sojq"/><path class="o25ttxbzy"/></g>`,
		"fallback": "withicons-retro:calendar-minus",
	});
}

export default Component;
