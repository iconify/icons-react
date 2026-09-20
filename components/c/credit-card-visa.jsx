import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/t/tghr4yb1c.css';
import '../../css/w/wl6-6l9kb.css';
import '../../css/g/g55iq_ryj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="tghr4yb1c"/><path class="wl6-6l9kb"/><path class="g55iq_ryj"/></g>`,
		"fallback": "streamline-cyber-color:credit-card-visa",
	});
}

export default Component;
