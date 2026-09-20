import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzeltiq8g.css';
import '../../css/a/a5kojgb5c.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tzeltiq8g"/><path class="a5kojgb5c"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:chat-unread-broken",
	});
}

export default Component;
