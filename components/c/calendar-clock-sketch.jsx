import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kjky4actn.css';
import '../../css/w/wlhoyjbfi.css';
import '../../css/n/n1l2_vbtw.css';
import '../../css/p/ps3m7jb7i.css';
import '../../css/d/docnxfbze.css';
import '../../css/x/x84d-w1gc.css';
import '../../css/i/i4vv6vpoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kjky4actn"/><path class="wlhoyjbfi wm-k"/><path class="n1l2_vbtw wm-a"/><path class="ps3m7jb7i wm-s"/><path class="docnxfbze wm-k"/><path class="wm-a x84d-w1gc"/><path class="i4vv6vpoj wm-s"/></g>`,
		"fallback": "withicons:calendar-clock-sketch",
	});
}

export default Component;
