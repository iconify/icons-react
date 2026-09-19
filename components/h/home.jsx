import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j1dgkg6oz.css';
import '../../css/s/si2g8__sn.css';
import '../../css/o/oftmulb0b.css';
import '../../css/h/hyueljs4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="j1dgkg6oz"/><path class="si2g8__sn"/><path class="oftmulb0b"/><path class="hyueljs4i"/></g>`,
		"fallback": "gcp:home",
	});
}

export default Component;
