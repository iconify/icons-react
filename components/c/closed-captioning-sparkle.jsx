import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_e3-2-2w.css';
import '../../css/k/kwtgjqbey.css';
import '../../css/j/jr_3drjmm.css';
import '../../css/s/sn3v6lbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_e3-2-2w"/><path class="kwtgjqbey"/><path class="jr_3drjmm"/><path class="sn3v6lbzz"/></g>`,
		"fallback": "andrsrxn:closed-captioning-sparkle",
	});
}

export default Component;
