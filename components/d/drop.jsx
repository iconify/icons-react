import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0ld87yxf.css';
import '../../css/z/z5qvmea1y.css';
import '../../css/f/ffmw93blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0ld87yxf"/><path class="z5qvmea1y"/><path class="ffmw93blu"/></g>`,
		"fallback": "andrsrxn:drop",
	});
}

export default Component;
