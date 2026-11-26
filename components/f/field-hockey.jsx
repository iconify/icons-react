import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/sjx7bppvr.css';
import '../../css/c/cz8hfeb1o.css';
import '../../css/j/j2_auq1hh.css';
import '../../css/j/j13c0ub7o.css';
import '../../css/p/pomkzrb1z.css';
import '../../css/h/h61r-3bjq.css';
import '../../css/j/jy2e3tj8y.css';
import '../../css/t/tlzwbx_ch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGoAfR7dHC" cx="145" cy="164" r="28.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="sjx7bppvr"/><stop offset="1" class="sjx7bppvr"/></radialGradient></defs><path class="cz8hfeb1o"/><path class="j2_auq1hh"/><path class="j13c0ub7o"/><path class="pomkzrb1z"/><path class="h61r-3bjq"/><path fill="url(#SVGoAfR7dHC)" transform="matrix(2.6 0 0 2.6 -.164 1.446)" class="jy2e3tj8y"/><path class="tlzwbx_ch"/>`,
		"fallback": "xero-emoji:field-hockey",
	});
}

export default Component;
