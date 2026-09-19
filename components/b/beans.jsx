import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n91y3gy_g.css';
import '../../css/c/ccuo0cgyo.css';
import '../../css/p/p92nq9akq.css';
import '../../css/w/w9no2ptwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n91y3gy_g"/><path class="ccuo0cgyo"/><path class="p92nq9akq"/><path class="w9no2ptwt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beans",
	});
}

export default Component;
