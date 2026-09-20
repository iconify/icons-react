import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofta6rb_y.css';
import '../../css/z/z3n81ldpx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/aimcm0bvo.css';
import '../../css/l/lf8o2bucu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofta6rb_y"/><path class="z3n81ldpx"/><g class="x8poo_bjf"><path class="aimcm0bvo"/><path class="lf8o2bucu"/></g>`,
		"fallback": "openmoji:briefs",
	});
}

export default Component;
