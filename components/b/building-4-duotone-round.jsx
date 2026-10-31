import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7r_-7b3n.css';
import '../../css/r/rr4fg8bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7r_-7b3n"/><path class="rr4fg8bjn"/></g>`,
		"fallback": "coolicons:building-4-duotone-round",
	});
}

export default Component;
