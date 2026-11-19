import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t23j8yb2w.css';
import '../../css/u/u_o--dncs.css';
import '../../css/e/eutlxtfsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="t23j8yb2w"/><path class="u_o--dncs"/><path class="eutlxtfsy"/></g>`,
		"fallback": "andrsrxn:degree-180",
	});
}

export default Component;
