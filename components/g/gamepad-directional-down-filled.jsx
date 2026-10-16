import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn3gwebjb.css';
import '../../css/m/mp-ousb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wn3gwebjb"/><path class="mp-ousb8u"/></g>`,
		"fallback": "andrsrxn:gamepad-directional-down-filled",
	});
}

export default Component;
