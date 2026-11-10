import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/r/rpyeg038q.css';
import '../../css/u/u_yh--4kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="rpyeg038q"/><path class="u_yh--4kl"/></g>`,
		"fallback": "andrsrxn:calendar-in",
	});
}

export default Component;
