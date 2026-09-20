import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f2w5wlbpv.css';
import '../../css/m/mj579accg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f2w5wlbpv"/><path class="mj579accg"/></g>`,
		"fallback": "keyline-icons:cloud-off-sharp-two-tone",
	});
}

export default Component;
