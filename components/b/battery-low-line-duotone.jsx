import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dw3gp6vcm.css';
import '../../css/d/d_xp_lbcm.css';
import '../../css/p/po5h2dbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dw3gp6vcm"/><path class="d_xp_lbcm"/><path class="po5h2dbat"/></g>`,
		"fallback": "solar:battery-low-line-duotone",
	});
}

export default Component;
