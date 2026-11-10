import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-ut1d-mx.css';
import '../../css/e/etu1ebctc.css';
import '../../css/o/ohe0zz2zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-ut1d-mx"/><path class="etu1ebctc"/><path class="ohe0zz2zl"/></g>`,
		"fallback": "andrsrxn:earbuds",
	});
}

export default Component;
