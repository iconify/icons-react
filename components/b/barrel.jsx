import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-65ix85h.css';
import '../../css/r/r6acznbrj.css';
import '../../css/f/f1o434bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-65ix85h"/><path class="r6acznbrj"/><path class="f1o434bfn"/></g>`,
		"fallback": "andrsrxn:barrel",
	});
}

export default Component;
