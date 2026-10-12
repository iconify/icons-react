import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0faf0fuf.css';
import '../../css/j/jlej2mezj.css';
import '../../css/f/fmzj1_7dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0faf0fuf"/><path class="jlej2mezj"/><path class="fmzj1_7dn"/></g>`,
		"fallback": "andrsrxn:book-star",
	});
}

export default Component;
