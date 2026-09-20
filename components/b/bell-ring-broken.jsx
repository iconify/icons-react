import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dv5-5hz_c.css';
import '../../css/d/d049j6lem.css';
import '../../css/z/z5vrcx69y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dv5-5hz_c"/><path class="d049j6lem"/><path class="z5vrcx69y"/></g>`,
		"fallback": "solar:bell-ring-broken",
	});
}

export default Component;
