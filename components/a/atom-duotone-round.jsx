import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eu4i4cclu.css';
import '../../css/e/ey87q0beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eu4i4cclu"/><path class="ey87q0beb"/></g>`,
		"fallback": "coolicons:atom-duotone-round",
	});
}

export default Component;
