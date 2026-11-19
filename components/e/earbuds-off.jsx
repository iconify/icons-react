import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhle72bue.css';
import '../../css/l/lbq_rab6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhle72bue"/><path class="lbq_rab6o"/></g>`,
		"fallback": "andrsrxn:earbuds-off",
	});
}

export default Component;
