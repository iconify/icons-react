import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcmxnb2gs.css';
import '../../css/d/djh2nixtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fcmxnb2gs"/><path class="djh2nixtm"/></g>`,
		"fallback": "andrsrxn:device-phone-x",
	});
}

export default Component;
