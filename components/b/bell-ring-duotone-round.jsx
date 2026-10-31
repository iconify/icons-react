import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o21s6q1ad.css';
import '../../css/q/q037x2b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o21s6q1ad"/><path class="q037x2b_q"/></g>`,
		"fallback": "coolicons:bell-ring-duotone-round",
	});
}

export default Component;
