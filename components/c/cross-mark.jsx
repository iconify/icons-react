import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptrq_tz8w.css';
import '../../css/w/wr4q_kbqj.css';
import '../../css/l/l5k9kcbvd.css';
import '../../css/r/racvfh8if.css';
import '../../css/p/phxbc-ogo.css';
import '../../css/d/dcnirabkp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGRCF0OWIj" cx="74" cy="62.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="ptrq_tz8w"/><stop offset=".85" class="wr4q_kbqj"/><stop offset="1" class="wr4q_kbqj"/></radialGradient></defs><path class="l5k9kcbvd"/><path fill="url(#SVGRCF0OWIj)" transform="matrix(2.4 0 0 2.4 18.038 18.038)" class="racvfh8if"/><path class="phxbc-ogo"/><path class="dcnirabkp"/>`,
		"fallback": "xero-emoji:cross-mark",
	});
}

export default Component;
