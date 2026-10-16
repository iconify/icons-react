import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/w/wm3q82uhi.css';
import '../../css/h/h0s338b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="wm3q82uhi"/><path class="h0s338b7n"/></g>`,
		"fallback": "andrsrxn:inbox-out",
	});
}

export default Component;
