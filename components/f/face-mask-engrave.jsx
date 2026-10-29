import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bvupyobzo.css';
import '../../css/u/uqb8hz1bt.css';
import '../../css/k/kewz__byf.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/r/rvvxdgw4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bvupyobzo wm-k"/><path class="uqb8hz1bt wm-a"/><path class="kewz__byf wm-shadow"/><path class="a6ey7sbng wm-k"/><path class="rvvxdgw4h wm-a"/></g>`,
		"fallback": "withicons:face-mask-engrave",
	});
}

export default Component;
