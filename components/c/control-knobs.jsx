import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk42hopxo.css';
import '../../css/c/ctrjvstlb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zmlt407qx.css';
import '../../css/m/mysjf089k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk42hopxo"/><path class="ctrjvstlb"/><g class="ij2x_72vy"><path class="zmlt407qx"/><path class="mysjf089k"/></g>`,
		"fallback": "openmoji:control-knobs",
	});
}

export default Component;
