import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6dfiqu2y.css';
import '../../css/i/isvtiyb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6dfiqu2y"/><path class="isvtiyb3q"/></g>`,
		"fallback": "andrsrxn:airplane-seat",
	});
}

export default Component;
