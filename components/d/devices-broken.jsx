import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vrr0_dbgw.css';
import '../../css/i/i3tmlwbvp.css';
import '../../css/p/pbcwo2bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vrr0_dbgw"/><path class="i3tmlwbvp"/><path class="pbcwo2bql"/></g>`,
		"fallback": "solar:devices-broken",
	});
}

export default Component;
