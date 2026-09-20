import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/j/jb8hy8b-t.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/c/cd5mfpgqy.css';
import '../../css/k/kk05o5b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="jb8hy8b-t"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="cd5mfpgqy"/><path class="kk05o5b_l"/></g>`,
		"fallback": "solar:gps-linear",
	});
}

export default Component;
