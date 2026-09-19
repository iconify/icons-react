import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpb1racfq.css';
import '../../css/b/b1as24bsj.css';
import '../../css/g/g0hzz3ziz.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fpb1racfq"/><path class="b1as24bsj"/><path class="g0hzz3ziz"/></g>`,
		"fallback": "cif:am",
	});
}

export default Component;
