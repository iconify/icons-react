import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oeyoe4ulc.css';
import '../../css/o/o7b3p0sit.css';
import '../../css/w/wddcw_b0d.css';
import '../../css/j/javs_0bhz.css';
import '../../css/l/l_-_e0bjw.css';
import '../../css/z/z1sgv-bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="oeyoe4ulc wm-shadow"/><path class="o7b3p0sit"/><path class="wddcw_b0d"/><path class="javs_0bhz"/><path class="l_-_e0bjw wm-shine"/><path class="wm-deco z1sgv-bul"/></g>`,
		"fallback": "withicons-sticker:chopsticks",
	});
}

export default Component;
