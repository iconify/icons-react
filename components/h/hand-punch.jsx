import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1q7xub4b.css';
import '../../css/s/slqhyxepq.css';
import '../../css/y/yqb6u3b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1q7xub4b"/><path class="slqhyxepq"/><path class="yqb6u3b4y"/></g>`,
		"fallback": "andrsrxn:hand-punch",
	});
}

export default Component;
