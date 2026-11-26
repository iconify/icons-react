import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/l/ledpfac8w.css';
import '../../css/j/j5fl3sb8v.css';
import '../../css/j/j3zmd01rz.css';
import '../../css/c/cek4lz3ie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGnAay6dFx" cx="78.7" cy="64.4" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="ledpfac8w"/><path fill="url(#SVGnAay6dFx)" transform="matrix(2.5 0 0 2.5 8.494 8.494)" class="j5fl3sb8v"/><path class="j3zmd01rz"/><path class="cek4lz3ie"/>`,
		"fallback": "xero-emoji:divide",
	});
}

export default Component;
