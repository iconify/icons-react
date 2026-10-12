import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh467jd4t.css';
import '../../css/c/cm2t7eo0v.css';
import '../../css/e/eqp0u9dpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gh467jd4t"/><rect transform="rotate(165 5.292 3.682)scale(1 -1)" class="cm2t7eo0v"/><path class="eqp0u9dpt"/></g>`,
		"fallback": "andrsrxn:cards",
	});
}

export default Component;
