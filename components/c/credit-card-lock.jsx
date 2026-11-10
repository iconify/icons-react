import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh0fgvbep.css';
import '../../css/r/r3-6mqbtg.css';
import '../../css/y/yr2yss6oa.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dh0fgvbep"/><path class="r3-6mqbtg"/><path class="yr2yss6oa"/><path class="dtkzsnbie"/></g>`,
		"fallback": "andrsrxn:credit-card-lock",
	});
}

export default Component;
