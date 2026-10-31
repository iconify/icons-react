import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kl08o_b2a.css';
import '../../css/w/w900bojzk.css';
import '../../css/z/z2x9h7gyn.css';
import '../../css/l/llod8s1is.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kl08o_b2a"/><path class="w900bojzk wm-shine"/><path class="wm-k z2x9h7gyn"/><path class="llod8s1is wm-a"/><path class="wm-deco yuobg4bux"/></g>`,
		"fallback": "withicons-kawaii:alert-triangle",
	});
}

export default Component;
