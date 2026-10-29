import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rviqavk6k.css';
import '../../css/q/qa8yllnsv.css';
import '../../css/l/lr-rh0b9q.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/f/fjmcwu-8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rviqavk6k wm-k"/><path class="qa8yllnsv wm-a"/><path class="lr-rh0b9q wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="fjmcwu-8t wm-a"/></g>`,
		"fallback": "withicons:disc-engrave",
	});
}

export default Component;
