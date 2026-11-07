import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l2c_0_bko.css';
import '../../css/e/evd_udn_h.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l2c_0_bko"/><path class="evd_udn_h"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:danger-triangle-linear",
	});
}

export default Component;
