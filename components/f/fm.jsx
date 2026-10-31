import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe9qg0rhv.css';
import '../../css/v/v4282eljr.css';

const viewBox = {"width":301,"height":159};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pe9qg0rhv"/><path class="v4282eljr"/></g>`,
		"fallback": "cif:fm",
	});
}

export default Component;
