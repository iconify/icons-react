import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w4ybr21ce.css';
import '../../css/k/kog6mrbkd.css';
import '../../css/n/nw3oz4bpg.css';
import '../../css/q/qrdk4qbxh.css';
import '../../css/d/dt6_6gbct.css';
import '../../css/w/w6c7h0bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="w4ybr21ce wm-shadow"/><path class="kog6mrbkd"/><path class="nw3oz4bpg"/><path class="qrdk4qbxh"/><path class="dt6_6gbct wm-shine"/><path class="w6c7h0bgs wm-deco"/></g>`,
		"fallback": "withicons-sticker:a-large-small",
	});
}

export default Component;
