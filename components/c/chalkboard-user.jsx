import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qe8lp6bwu.css';
import '../../css/o/oy5uj2_to.css';
import '../../css/i/ifu072bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qe8lp6bwu"/><path class="oy5uj2_to"/><path class="ifu072bhm"/></g>`,
		"fallback": "andrsrxn:chalkboard-user",
	});
}

export default Component;
