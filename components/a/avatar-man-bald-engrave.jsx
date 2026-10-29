import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpl7eeb7q.css';
import '../../css/k/ki6_b_bmd.css';
import '../../css/h/hm4q1972t.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/k/kdt6r7boc.css';
import '../../css/w/wep00ffkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fpl7eeb7q wm-k"/><path class="ki6_b_bmd wm-a"/><path class="hm4q1972t wm-shadow"/><path class="bg3dj-bbo wm-k"/><path class="d3y9mw6db wm-k"/><path class="kdt6r7boc wm-a"/><path class="wep00ffkx wm-k"/></g>`,
		"fallback": "withicons:avatar-man-bald-engrave",
	});
}

export default Component;
