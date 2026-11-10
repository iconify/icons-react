import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8yxm9erq.css';
import '../../css/j/jrn5fu1lp.css';
import '../../css/i/i7l2k5bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8yxm9erq"/><path class="jrn5fu1lp"/><path class="i7l2k5bwl"/></g>`,
		"fallback": "andrsrxn:ear-off",
	});
}

export default Component;
