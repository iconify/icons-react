import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9w_4sb1k.css';
import '../../css/t/t656dmbpt.css';
import '../../css/f/fm1no8bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9w_4sb1k"/><path class="t656dmbpt"/><path class="fm1no8bfc"/></g>`,
		"fallback": "andrsrxn:earbuds-right",
	});
}

export default Component;
