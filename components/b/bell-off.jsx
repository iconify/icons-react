import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9wxy6bvh.css';
import '../../css/k/kswqd_21e.css';
import '../../css/e/ed8w_yb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9wxy6bvh"/><path class="kswqd_21e"/><path class="ed8w_yb8v"/></g>`,
		"fallback": "andrsrxn:bell-off",
	});
}

export default Component;
