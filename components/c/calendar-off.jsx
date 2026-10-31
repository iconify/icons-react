import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yv1mx3gtc.css';
import '../../css/a/ao3jr1bue.css';
import '../../css/u/ux0m3dede.css';
import '../../css/z/z1gmr9wnl.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yv1mx3gtc"/><path class="ao3jr1bue wm-shadow"/><path class="ux0m3dede"/><path class="z1gmr9wnl"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:calendar-off",
	});
}

export default Component;
