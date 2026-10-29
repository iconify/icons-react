import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x_-ptj1rw.css';
import '../../css/x/x6dhh7m6p.css';
import '../../css/k/kfw45lpzb.css';
import '../../css/m/mxoc7ebik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k x_-ptj1rw"/><path class="wm-a x6dhh7m6p"/><path class="kfw45lpzb wm-s"/><path class="mxoc7ebik"/></g>`,
		"fallback": "withicons-bauhaus:christmas-candle",
	});
}

export default Component;
