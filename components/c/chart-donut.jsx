import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="lhi-d6nau"/><path class="sd-bzfbly"/><path class="emidn4bkk"/></g>`,
		"fallback": "iconaut:chart-donut",
	});
}

export default Component;
