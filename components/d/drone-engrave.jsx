import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/slrgnkb1f.css';
import '../../css/v/vlx0_vblb.css';
import '../../css/n/npw91zb7m.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="slrgnkb1f wm-k"/><path class="vlx0_vblb wm-a"/><path class="npw91zb7m wm-shadow"/><path class="hr07nwq7t wm-k"/><path class="t96a34een wm-a"/></g>`,
		"fallback": "withicons:drone-engrave",
	});
}

export default Component;
