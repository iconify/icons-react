import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mw5qx4brw.css';
import '../../css/v/v_kf02dmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mw5qx4brw"/><path class="v_kf02dmm"/></g>`,
		"fallback": "iconaut:game-cartridge",
	});
}

export default Component;
