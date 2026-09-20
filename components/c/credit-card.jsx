import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/l/lduww_jdn.css';
import '../../css/g/g55iq_ryj.css';
import '../../css/e/e_g6gnite.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="lduww_jdn"/><path class="g55iq_ryj"/><path class="e_g6gnite"/></g>`,
		"fallback": "streamline-cyber-color:credit-card",
	});
}

export default Component;
