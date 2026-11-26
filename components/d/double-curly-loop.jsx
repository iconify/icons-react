import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/y/ynciedwtf.css';
import '../../css/k/kwiex7bof.css';
import '../../css/a/ag0okvcwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGHyfZFEKD" cx="73.4" cy="82.3" r="152" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="ynciedwtf"/><path fill="url(#SVGHyfZFEKD)" transform="matrix(2.3 0 0 2.3 23.023 23.023)" class="kwiex7bof"/><path class="ag0okvcwa"/>`,
		"fallback": "xero-emoji:double-curly-loop",
	});
}

export default Component;
