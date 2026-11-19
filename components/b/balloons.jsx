import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_rsnt1on.css';
import '../../css/r/rwwp-6wln.css';
import '../../css/c/cc_d832mf.css';
import '../../css/y/yk99yrbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x_rsnt1on"/><path class="rwwp-6wln"/><path class="cc_d832mf"/><path class="yk99yrbdt"/></g>`,
		"fallback": "andrsrxn:balloons",
	});
}

export default Component;
