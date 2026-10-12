import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcc22nbhq.css';
import '../../css/l/l0_l0ubcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dcc22nbhq"/><path class="l0_l0ubcz"/></g>`,
		"fallback": "andrsrxn:hanger",
	});
}

export default Component;
