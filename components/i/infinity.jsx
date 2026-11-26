import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/y/y_hu51b7l.css';
import '../../css/e/e_7w8szzv.css';
import '../../css/f/fphbf4bvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGWcecNcxx" cx="75.1" cy="79.2" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="y_hu51b7l"/><path fill="url(#SVGWcecNcxx)" transform="matrix(2.5 0 0 2.5 8.494 8.494)" class="e_7w8szzv"/><path class="fphbf4bvq"/>`,
		"fallback": "xero-emoji:infinity",
	});
}

export default Component;
