import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tf_l5nbab.css';
import '../../css/p/pyv4bmb-w.css';
import '../../css/i/irj_uibij.css';
import '../../css/f/f991rrbwm.css';
import '../../css/q/qec2gsrbm.css';
import '../../css/l/l-3l0-m-x.css';
import '../../css/k/krzygdc1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tf_l5nbab wm-k"/><path class="pyv4bmb-w wm-deco"/><path class="irj_uibij wm-k"/><path class="f991rrbwm wm-k"/><path class="qec2gsrbm wm-shadow"/><path class="l-3l0-m-x wm-shine"/><path class="krzygdc1y wm-shine"/></g>`,
		"fallback": "withicons-valentine:camera",
	});
}

export default Component;
