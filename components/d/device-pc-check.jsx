import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwkut7v4p.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/i/i5ye2bnfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qwkut7v4p"/><rect class="rcdfnub0v"/><path class="i5ye2bnfr"/></g>`,
		"fallback": "andrsrxn:device-pc-check",
	});
}

export default Component;
