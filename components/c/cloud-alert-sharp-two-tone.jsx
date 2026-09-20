import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r3bxhz_dv.css';
import '../../css/y/yfmpc0kxb.css';
import '../../css/j/j_rl4l5tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r3bxhz_dv"/><path class="yfmpc0kxb"/><path class="j_rl4l5tj"/></g>`,
		"fallback": "keyline-icons:cloud-alert-sharp-two-tone",
	});
}

export default Component;
