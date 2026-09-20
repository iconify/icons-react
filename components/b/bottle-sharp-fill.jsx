import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lqm6vl25b.css';
import '../../css/e/e2a5o8qra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lqm6vl25b"/><path class="e2a5o8qra"/></g>`,
		"fallback": "keyline-icons:bottle-sharp-fill",
	});
}

export default Component;
