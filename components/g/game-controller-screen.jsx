import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz3s7sbjt.css';
import '../../css/i/i8zr05b0h.css';
import '../../css/b/b7gohsl5e.css';
import '../../css/y/y0bo0ybvo.css';
import '../../css/l/l0jvyst9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz3s7sbjt"/><path class="i8zr05b0h"/><path class="b7gohsl5e"/><path class="y0bo0ybvo"/><path class="l0jvyst9y"/></g>`,
		"fallback": "andrsrxn:game-controller-screen",
	});
}

export default Component;
