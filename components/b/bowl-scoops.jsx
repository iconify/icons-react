import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/reazo4b-i.css';
import '../../css/j/joni90--b.css';
import '../../css/r/rtu1dw7eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="reazo4b-i"/><path class="joni90--b"/><path class="rtu1dw7eq"/></g>`,
		"fallback": "andrsrxn:bowl-scoops",
	});
}

export default Component;
