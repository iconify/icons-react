import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u00ey8bps.css';
import '../../css/d/dmfni0bso.css';
import '../../css/z/zat_x8b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="u00ey8bps"/><path class="dmfni0bso"/><path class="zat_x8b4n"/></g>`,
		"fallback": "solar:inbox-unread-broken",
	});
}

export default Component;
