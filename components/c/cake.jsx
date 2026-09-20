import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vwchn3tyd.css';
import '../../css/c/ctbp2ybpi.css';
import '../../css/v/v3k4esbvy.css';
import '../../css/k/kmhx_lrvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vwchn3tyd"/><path class="ctbp2ybpi"/><circle class="v3k4esbvy"/><path clip-rule="evenodd" class="kmhx_lrvh"/></g>`,
		"fallback": "lets-icons:cake",
	});
}

export default Component;
