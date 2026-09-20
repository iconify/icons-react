import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s8ozk_bvp.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/c/cd5mfpgqy.css';
import '../../css/k/kk05o5b_l.css';
import '../../css/a/aru2yfbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s8ozk_bvp"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="cd5mfpgqy"/><path class="kk05o5b_l"/><path class="aru2yfbdz"/></g>`,
		"fallback": "solar:gps-broken",
	});
}

export default Component;
