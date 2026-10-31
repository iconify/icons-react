import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnv1p6b-u.css';
import '../../css/d/dgej56smc.css';
import '../../css/d/d0yprjnmi.css';
import '../../css/x/x0val9bto.css';
import '../../css/n/nx76p1bke.css';
import '../../css/h/h36rc99po.css';
import '../../css/w/wk4d8wbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wnv1p6b-u"/><path class="dgej56smc"/><path class="d0yprjnmi"/><path class="x0val9bto"/><path class="nx76p1bke"/><path class="h36rc99po"/><path class="wk4d8wbwu"/></g>`,
		"fallback": "withicons-brutal:avatar-man",
	});
}

export default Component;
