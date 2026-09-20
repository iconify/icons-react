import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ie3nmnb4k.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/r/rn08x5brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ie3nmnb4k"/><path class="m99yuxjsm"/><path class="rn08x5brb"/></g>`,
		"fallback": "solar:bomb-broken",
	});
}

export default Component;
