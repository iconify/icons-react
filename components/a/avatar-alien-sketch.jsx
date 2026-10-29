import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jy--pbbbh.css';
import '../../css/x/x5caspqqs.css';
import '../../css/o/o4j8kacgj.css';
import '../../css/z/zvmrzybbz.css';
import '../../css/z/zzq0oubsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jy--pbbbh"/><path class="wm-a x5caspqqs"/><path class="o4j8kacgj wm-k"/><path class="wm-a zvmrzybbz"/><path class="wm-s zzq0oubsm"/></g>`,
		"fallback": "withicons:avatar-alien-sketch",
	});
}

export default Component;
