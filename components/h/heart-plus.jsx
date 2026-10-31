import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/l/l6i4z6k_y.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/p/ph-75l5jk.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="l6i4z6k_y wm-shine"/><path class="uh01hzbyb wm-k"/><path class="ph-75l5jk wm-s"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:heart-plus",
	});
}

export default Component;
