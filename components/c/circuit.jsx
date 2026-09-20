import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw2zz0bco.css';
import '../../css/q/qwcw2dols.css';
import '../../css/e/ef8dd5fmv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jgtei1-7f.css';
import '../../css/o/o63jcwmgg.css';
import '../../css/s/s8dlyyvqf.css';
import '../../css/z/z39z3ib6n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw2zz0bco"/><path class="qwcw2dols"/><circle class="ef8dd5fmv"/><g class="ij2x_72vy"><path class="jgtei1-7f"/><path class="o63jcwmgg"/><circle class="s8dlyyvqf"/><path class="z39z3ib6n"/></g>`,
		"fallback": "openmoji:circuit",
	});
}

export default Component;
