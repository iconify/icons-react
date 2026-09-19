import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc23yw7-v.css';
import '../../css/m/m24ig1bjm.css';
import '../../css/w/w_x3o7r4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nc23yw7-v"/><path class="m24ig1bjm"/><path class="w_x3o7r4u"/></g>`,
		"fallback": "hugeicons:access",
	});
}

export default Component;
