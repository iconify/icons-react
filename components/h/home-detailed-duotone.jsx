import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ik1jx-bvn.css';
import '../../css/o/o_ke7ac_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ik1jx-bvn"/><path class="o_ke7ac_b"/></g>`,
		"fallback": "si:home-detailed-duotone",
	});
}

export default Component;
