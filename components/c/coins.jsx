import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t1bfb5bmw.css';
import '../../css/x/xite_57fl.css';
import '../../css/w/wui8mvbek.css';
import '../../css/d/drk43q95s.css';
import '../../css/f/fql3nbclx.css';
import '../../css/f/fjxpbcbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t1bfb5bmw wm-shadow"/><path class="xite_57fl"/><path class="wui8mvbek"/><path class="drk43q95s"/><path class="fql3nbclx"/><path class="fjxpbcbpk"/></g>`,
		"fallback": "withicons-retro:coins",
	});
}

export default Component;
