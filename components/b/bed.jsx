import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vtez2z40b.css';
import '../../css/q/q0bdk4i-f.css';
import '../../css/j/j5c-72bro.css';
import '../../css/t/t72t-tsgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vtez2z40b wm-shadow"/><path class="q0bdk4i-f wm-shadow"/><path class="j5c-72bro"/><path class="t72t-tsgi"/></g>`,
		"fallback": "withicons-brutal:bed",
	});
}

export default Component;
