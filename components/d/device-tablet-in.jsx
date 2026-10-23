import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frpbhccdv.css';
import '../../css/h/h3vh_robu.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="frpbhccdv"/><path class="h3vh_robu"/><path class="xtyg9db9j"/></g>`,
		"fallback": "andrsrxn:device-tablet-in",
	});
}

export default Component;
