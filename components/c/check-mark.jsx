import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/q/qjipkknvo.css';
import '../../css/h/hmim2ub7z.css';
import '../../css/z/z352bjbni.css';
import '../../css/g/g19j47bfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGspd3k5Ci" cx="78.3" cy="75.5" r="124" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="qjipkknvo"/><path fill="url(#SVGspd3k5Ci)" transform="matrix(2.8 0 0 2.8 -26.769 -26.769)" class="hmim2ub7z"/><path class="z352bjbni"/><path class="g19j47bfm"/>`,
		"fallback": "xero-emoji:check-mark",
	});
}

export default Component;
