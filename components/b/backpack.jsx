import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n1a2vbcyq.css';
import '../../css/f/f7pgedcvr.css';
import '../../css/b/b3gzqqb0d.css';
import '../../css/c/c_glv4cni.css';
import '../../css/l/lhegzwfbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n1a2vbcyq wm-shadow"/><path class="f7pgedcvr wm-shadow"/><path class="b3gzqqb0d"/><path class="c_glv4cni"/><path class="lhegzwfbg"/></g>`,
		"fallback": "withicons-brutal:backpack",
	});
}

export default Component;
