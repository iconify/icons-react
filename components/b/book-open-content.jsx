import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg4cd7bfx.css';
import '../../css/u/usk91uphc.css';
import '../../css/c/cdvnaeuhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dg4cd7bfx"/><path class="usk91uphc"/><path class="cdvnaeuhy"/></g>`,
		"fallback": "andrsrxn:book-open-content",
	});
}

export default Component;
