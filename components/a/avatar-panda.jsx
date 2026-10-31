import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v1ew5mj8x.css';
import '../../css/u/ughw1qbaj.css';
import '../../css/t/tw3z3dboe.css';
import '../../css/h/hc0dw87li.css';
import '../../css/m/mlh5qhbzx.css';
import '../../css/f/f0p7mosim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v1ew5mj8x"/><path class="ughw1qbaj"/><path class="tw3z3dboe wm-shine"/><path class="hc0dw87li wm-k"/><path class="mlh5qhbzx wm-a"/><path class="f0p7mosim wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-panda",
	});
}

export default Component;
