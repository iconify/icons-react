import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry80fpboa.css';
import '../../css/u/ujbk8xv8b.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/y5ci_mb6j.css';
import '../../css/j/j9w5pbx8g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry80fpboa"/><path class="ujbk8xv8b"/><g class="ij2x_72vy"><path class="y5ci_mb6j"/><path class="j9w5pbx8g"/></g>`,
		"fallback": "openmoji:gorilla",
	});
}

export default Component;
