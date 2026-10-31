import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q2tsw-b3d.css';
import '../../css/g/g1x_t8b8g.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';
import '../../css/s/s1kut8o6j.css';
import '../../css/v/v-4o6sb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="q2tsw-b3d"/><path class="g1x_t8b8g wm-shine"/><path class="f0xsko-4b wm-k"/><path class="guqhbex6p wm-a"/><path class="s1kut8o6j wm-s"/><path class="v-4o6sb2b wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-alien",
	});
}

export default Component;
