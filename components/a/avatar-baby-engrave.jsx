import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i7uq79bgp.css';
import '../../css/r/r18_sybav.css';
import '../../css/w/wpc9_q4lt.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/w/w0uecybzn.css';
import '../../css/a/afrxd3bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i7uq79bgp wm-k"/><path class="r18_sybav wm-a"/><path class="wm-shadow wpc9_q4lt"/><path class="bg3dj-bbo wm-k"/><path class="d3y9mw6db wm-k"/><path class="w0uecybzn wm-a"/><path class="afrxd3bde wm-a"/></g>`,
		"fallback": "withicons:avatar-baby-engrave",
	});
}

export default Component;
