import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-v4rgbdl.css';
import '../../css/u/u00ey8bps.css';
import '../../css/d/dmfni0bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-v4rgbdl"/><circle class="u00ey8bps"/><path class="dmfni0bso"/></g>`,
		"fallback": "solar:inbox-unread-linear",
	});
}

export default Component;
