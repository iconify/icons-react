import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4dd6nbsr.css';
import '../../css/x/xxijo_twl.css';
import '../../css/w/w5cem9faf.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4dd6nbsr"/><path class="xxijo_twl"/><path class="w5cem9faf"/></g>`,
		"fallback": "cif:bw",
	});
}

export default Component;
