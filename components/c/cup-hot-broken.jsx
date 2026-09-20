import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y43krxvce.css';
import '../../css/h/ht6mdpbgs.css';
import '../../css/z/z6-z9cnxa.css';
import '../../css/r/rwqv--bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y43krxvce"/><path class="ht6mdpbgs"/><path class="z6-z9cnxa"/><path class="rwqv--bmo"/></g>`,
		"fallback": "solar:cup-hot-broken",
	});
}

export default Component;
