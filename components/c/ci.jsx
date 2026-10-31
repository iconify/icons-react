import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/d/db_1-p3mm.css';
import '../../css/j/j0yoyr0ez.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="db_1-p3mm"/><path class="j0yoyr0ez"/></g>`,
		"fallback": "cif:ci",
	});
}

export default Component;
