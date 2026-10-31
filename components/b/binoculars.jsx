import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxeb9cbhy.css';
import '../../css/n/n_ltp9u_y.css';
import '../../css/a/aicjkwbxd.css';
import '../../css/z/z5k4hm6zq.css';
import '../../css/x/xyem8fn8v.css';
import '../../css/q/qrw40zq2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sxeb9cbhy wm-shadow"/><path class="n_ltp9u_y"/><path class="aicjkwbxd"/><path class="z5k4hm6zq"/><path class="xyem8fn8v"/><path class="qrw40zq2w"/></g>`,
		"fallback": "withicons-retro:binoculars",
	});
}

export default Component;
