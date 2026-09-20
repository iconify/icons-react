import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r3bxhz_dv.css';
import '../../css/o/odegl41sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r3bxhz_dv"/><path class="odegl41sc"/></g>`,
		"fallback": "keyline-icons:cloud-check-sharp-two-tone",
	});
}

export default Component;
