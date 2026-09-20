import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvkw4oiyc.css';
import '../../css/v/v5l5vgbks.css';
import '../../css/k/knx1hwb4l.css';
import '../../css/e/e_un4ubpg.css';
import '../../css/x/xkvin1h0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvkw4oiyc"/><path class="v5l5vgbks"/><path class="knx1hwb4l"/><path class="e_un4ubpg"/><path class="xkvin1h0r"/></g>`,
		"fallback": "solar:gamepad-old-broken",
	});
}

export default Component;
