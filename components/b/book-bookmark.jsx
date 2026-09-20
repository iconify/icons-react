import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f83wusbau.css';
import '../../css/g/guqyzobsq.css';
import '../../css/u/ux0herbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f83wusbau"/><path class="guqyzobsq"/><path class="ux0herbjb"/></g>`,
		"fallback": "streamline-freehand-color:book-bookmark",
	});
}

export default Component;
