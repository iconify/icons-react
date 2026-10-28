import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deut1gbkc.css';
import '../../css/k/kf5wfoe_q.css';
import '../../css/f/fuh5qsexi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="deut1gbkc"/><path class="kf5wfoe_q"/><path class="fuh5qsexi"/></g>`,
		"fallback": "andrsrxn:chalkboard-off",
	});
}

export default Component;
