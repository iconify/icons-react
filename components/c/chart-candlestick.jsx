import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ikplvmbos.css';
import '../../css/r/racm5fbpm.css';
import '../../css/d/d2xmu7b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ikplvmbos"/><path class="racm5fbpm"/><path class="d2xmu7b2s"/></g>`,
		"fallback": "withicons-bauhaus:chart-candlestick",
	});
}

export default Component;
