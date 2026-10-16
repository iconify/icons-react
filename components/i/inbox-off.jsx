import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/q/q9d-hjb-g.css';
import '../../css/z/zp_gdld4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="q9d-hjb-g"/><path class="zp_gdld4u"/></g>`,
		"fallback": "andrsrxn:inbox-off",
	});
}

export default Component;
