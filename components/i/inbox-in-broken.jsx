import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/na411obky.css';
import '../../css/d/dmfni0bso.css';
import '../../css/w/wl_m8gbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="na411obky"/><path class="dmfni0bso"/><path class="wl_m8gbqi"/></g>`,
		"fallback": "solar:inbox-in-broken",
	});
}

export default Component;
