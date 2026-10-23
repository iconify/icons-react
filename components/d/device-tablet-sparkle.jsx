import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irrgrgqda.css';
import '../../css/b/bkx-rob4y.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/w/wr0j6ebrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="irrgrgqda"/><path class="bkx-rob4y"/><path class="xtyg9db9j"/><path class="wr0j6ebrz"/></g>`,
		"fallback": "andrsrxn:device-tablet-sparkle",
	});
}

export default Component;
