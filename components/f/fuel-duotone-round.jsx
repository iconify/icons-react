import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f21b_ab3y.css';
import '../../css/d/dcjzhtbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f21b_ab3y"/><path class="dcjzhtbrr"/></g>`,
		"fallback": "coolicons:fuel-duotone-round",
	});
}

export default Component;
