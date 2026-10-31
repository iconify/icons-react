import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw256_b_w.css';
import '../../css/q/qngpuubyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uw256_b_w wm-k"/><path class="qngpuubyn wm-s"/></g>`,
		"fallback": "withicons:flashlight-gloss",
	});
}

export default Component;
