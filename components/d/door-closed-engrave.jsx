import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hpu2ghv2w.css';
import '../../css/w/w1zs2bbif.css';
import '../../css/i/ic5g_yble.css';
import '../../css/s/smls78shz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hpu2ghv2w wm-k"/><path class="w1zs2bbif wm-shadow"/><path class="ic5g_yble wm-k"/><path class="smls78shz wm-a"/></g>`,
		"fallback": "withicons:door-closed-engrave",
	});
}

export default Component;
