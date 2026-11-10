import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nny7b_l.css';
import '../../css/l/lqm6bibtw.css';
import '../../css/y/yzr1cbbbc.css';
import '../../css/r/rsjhhrp7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e3nny7b_l"/><path class="lqm6bibtw"/><path class="yzr1cbbbc"/><path class="rsjhhrp7j"/></g>`,
		"fallback": "andrsrxn:globe-off",
	});
}

export default Component;
