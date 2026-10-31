import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7139cbvh.css';
import '../../css/t/ty2xixbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7139cbvh"/><path class="ty2xixbmc"/></g>`,
		"fallback": "coolicons:chart-candlestick-duotone-round",
	});
}

export default Component;
