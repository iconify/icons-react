import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/r/r0ao98w4y.css';
import '../../css/j/joky3n72o.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/i52n0_b3y.css';
import '../../css/l/l5vl9busa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="r0ao98w4y"/><path class="joky3n72o"/></g><g class="ij2x_72vy"><path class="i52n0_b3y"/><path class="l5vl9busa"/></g>`,
		"fallback": "openmoji:department-store",
	});
}

export default Component;
