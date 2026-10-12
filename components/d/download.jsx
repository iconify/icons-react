import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvnkvubqr.css';
import '../../css/f/f_zd26b3k.css';
import '../../css/c/c01djtbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hvnkvubqr"/><path class="f_zd26b3k"/><path class="c01djtbgr"/></g>`,
		"fallback": "andrsrxn:download",
	});
}

export default Component;
