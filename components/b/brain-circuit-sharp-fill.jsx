import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/frc_m5boq.css';
import '../../css/p/pg13u4ygs.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="frc_m5boq"/><path class="pg13u4ygs"/><path class="ei48vjbzf"/></g>`,
		"fallback": "keyline-icons:brain-circuit-sharp-fill",
	});
}

export default Component;
