import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/n/n656lc6lu.css';
import '../../css/f/f13cd_bxw.css';
import '../../css/o/ojqsoeb3a.css';
import '../../css/p/pnhp71-ve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGSxEnGeuB" cx="75.6" cy="81.5" r="139.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="n656lc6lu"/><path fill="url(#SVGSxEnGeuB)" transform="matrix(2.5 0 0 2.5 2.86 2.86)" class="f13cd_bxw"/><path class="ojqsoeb3a"/><path class="pnhp71-ve"/>`,
		"fallback": "xero-emoji:curly-loop",
	});
}

export default Component;
