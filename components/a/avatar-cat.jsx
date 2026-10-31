import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xhhdvnrxi.css';
import '../../css/r/rzrswyduy.css';
import '../../css/o/oec4dbczn.css';
import '../../css/e/ei8_ngj-v.css';
import '../../css/s/swt_2tlzv.css';
import '../../css/u/u_ya9obqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xhhdvnrxi"/><path class="rzrswyduy"/><path class="oec4dbczn"/><path class="ei8_ngj-v"/><path class="swt_2tlzv"/><path class="u_ya9obqn"/></g>`,
		"fallback": "withicons-retro:avatar-cat",
	});
}

export default Component;
