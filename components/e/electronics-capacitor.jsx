import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plqr-gm0h.css';
import '../../css/w/wswfnmbfz.css';
import '../../css/k/k4d_-doxe.css';
import '../../css/y/yk6ygd-2x.css';
import '../../css/g/ghn_xobtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="plqr-gm0h"/><path class="wswfnmbfz"/><path class="k4d_-doxe"/><path class="yk6ygd-2x"/><path class="ghn_xobtc"/></g>`,
		"fallback": "streamline-ultimate-color:electronics-capacitor",
	});
}

export default Component;
