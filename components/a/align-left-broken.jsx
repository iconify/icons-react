import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hb2atdblt.css';
import '../../css/r/rns374uuw.css';
import '../../css/o/ou2j_7qjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hb2atdblt"/><path class="rns374uuw"/><path class="ou2j_7qjf"/></g>`,
		"fallback": "solar:align-left-broken",
	});
}

export default Component;
