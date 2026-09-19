import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vacgxwbuv.css';
import '../../css/q/qfh2rne1z.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vacgxwbuv"/><path class="qfh2rne1z"/></g>`,
		"fallback": "cif:cn",
	});
}

export default Component;
