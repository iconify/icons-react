import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq4emk-qe.css';
import '../../css/t/tnz6_ac4y.css';
import '../../css/n/nd7sxeber.css';
import '../../css/b/b3s9f6bbf.css';
import '../../css/m/mnffbmg2b.css';
import '../../css/u/uz8q4ibxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG16s2peqx" cx="77.6" cy="74.2" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="uq4emk-qe"/><stop offset=".85" class="tnz6_ac4y"/><stop offset="1" class="tnz6_ac4y"/></radialGradient></defs><path class="nd7sxeber"/><path fill="url(#SVG16s2peqx)" transform="matrix(2.7 0 0 2.7 -18.389 -32.139)" class="b3s9f6bbf"/><path class="mnffbmg2b"/><path class="uz8q4ibxq"/>`,
		"fallback": "xero-emoji:heart-suit",
	});
}

export default Component;
