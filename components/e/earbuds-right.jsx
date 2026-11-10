import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9w_4sb1k.css';
import '../../css/t/t-3v1hi-d.css';
import '../../css/i/i1tsml_2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9w_4sb1k"/><path class="t-3v1hi-d"/><path class="i1tsml_2v"/></g>`,
		"fallback": "andrsrxn:earbuds-right",
	});
}

export default Component;
