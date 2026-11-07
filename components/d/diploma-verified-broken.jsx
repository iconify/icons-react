import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcvxg_w4r.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/e/ep2vvy3hy.css';
import '../../css/k/kwa7-tyjx.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcvxg_w4r"/><path class="n1_ykhn3f"/><path class="ep2vvy3hy"/><path class="kwa7-tyjx"/><path class="a0l-fdc8b"/></g>`,
		"fallback": "solar:diploma-verified-broken",
	});
}

export default Component;
