import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dibbkcbas.css';
import '../../css/k/k0sqd2bni.css';
import '../../css/c/cotce_bum.css';
import '../../css/o/oxmd-acca.css';
import '../../css/q/q6fmti2ak.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dibbkcbas wm-shadow"/><path class="k0sqd2bni"/><path class="cotce_bum"/><path class="oxmd-acca"/><path class="q6fmti2ak wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`,
		"fallback": "withicons-sticker:drag-handle",
	});
}

export default Component;
