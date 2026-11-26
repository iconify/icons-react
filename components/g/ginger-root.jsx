import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j93p6xwpz.css';
import '../../css/i/iv5d7uj6s.css';
import '../../css/i/i1wmtrbhm.css';
import '../../css/m/m0h32ib6y.css';
import '../../css/h/hr0bj-boc.css';
import '../../css/u/umwf9objh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGqQs2YnBS" cx="79.5" cy="78" r="145.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="j93p6xwpz"/><stop offset=".85" class="iv5d7uj6s"/><stop offset="1" class="iv5d7uj6s"/></radialGradient></defs><path class="i1wmtrbhm"/><path fill="url(#SVGqQs2YnBS)" transform="matrix(2.7 0 0 2.7 -12.717 -33.307)" class="m0h32ib6y"/><path class="hr0bj-boc"/><path class="umwf9objh"/>`,
		"fallback": "xero-emoji:ginger-root",
	});
}

export default Component;
