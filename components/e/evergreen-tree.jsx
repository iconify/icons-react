import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtihe6bnc.css';
import '../../css/z/z04drlb1l.css';
import '../../css/j/jac5gpbkf.css';
import '../../css/d/d04ckpbzr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtihe6bnc"/><g class="z04drlb1l"><path class="jac5gpbkf"/><path class="d04ckpbzr"/></g>`,
		"fallback": "openmoji:evergreen-tree",
	});
}

export default Component;
