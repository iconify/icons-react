import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc63f9f5z.css';
import '../../css/i/i0yittbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lc63f9f5z"/><path class="i0yittbjc"/></g>`,
		"fallback": "coolicons:airplay-duotone-round",
	});
}

export default Component;
