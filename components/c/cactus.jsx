import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4f0vxbyl.css';
import '../../css/w/w0lgbgbqx.css';
import '../../css/u/ubvt3q_xo.css';
import '../../css/h/h5f46xvgp.css';
import '../../css/k/ksr3fzbxp.css';
import '../../css/a/a06m7bcmy.css';
import '../../css/z/zuuebq0nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4f0vxbyl wm-k"/><path class="w0lgbgbqx wm-deco"/><path class="ubvt3q_xo wm-k"/><path class="h5f46xvgp wm-k"/><path class="ksr3fzbxp wm-shadow"/><path class="a06m7bcmy wm-shine"/><path class="wm-shine zuuebq0nn"/></g>`,
		"fallback": "withicons-valentine:cactus",
	});
}

export default Component;
