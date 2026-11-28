import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkt4evw8n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lhi-d6nau.css';
import '../../css/s/sd-bzfbly.css';
import '../../css/e/emidn4bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vkt4evw8n"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lhi-d6nau"/><path class="sd-bzfbly"/><path class="emidn4bkk"/></g>`,
		"fallback": "iconaut:chart-donut-duo",
	});
}

export default Component;
