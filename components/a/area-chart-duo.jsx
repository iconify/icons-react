import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ema-raczb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fc_9on64f.css';
import '../../css/r/rdsn7pb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ema-raczb secondary"/><g class="dt0cm9dhy primary"><path class="fc_9on64f"/><path class="rdsn7pb1c"/></g>`,
		"fallback": "iconaut:area-chart-duo",
	});
}

export default Component;
