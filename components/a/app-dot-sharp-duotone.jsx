import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i2koj3lau.css';
import '../../css/q/q_l1jacog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i2koj3lau"/><path class="q_l1jacog"/></g>`,
		"fallback": "keyline-icons:app-dot-sharp-duotone",
	});
}

export default Component;
