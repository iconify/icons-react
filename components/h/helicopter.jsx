import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5ur5r6_w.css';
import '../../css/q/qsr9eibbu.css';
import '../../css/u/uzutb_p5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5ur5r6_w"/><path class="qsr9eibbu"/><path class="uzutb_p5t"/></g>`,
		"fallback": "andrsrxn:helicopter",
	});
}

export default Component;
