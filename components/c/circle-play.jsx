import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/l/l0y-_mbcr.css';
import '../../css/g/g8ig_ccva.css';
import '../../css/t/t2088ybvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="l0y-_mbcr"/><path class="g8ig_ccva"/><path class="t2088ybvo"/></g>`,
		"fallback": "withicons-brutal:circle-play",
	});
}

export default Component;
