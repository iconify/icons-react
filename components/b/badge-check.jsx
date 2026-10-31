import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw2omwb1g.css';
import '../../css/c/cgjl5jf_k.css';
import '../../css/y/y12p32hnk.css';
import '../../css/j/jtng-mbyc.css';
import '../../css/m/mf7_hcb6z.css';
import '../../css/e/e5t5j33_q.css';
import '../../css/z/zoctaccxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lw2omwb1g wm-k"/><path class="cgjl5jf_k wm-deco"/><path class="wm-k y12p32hnk"/><path class="jtng-mbyc wm-k"/><path class="mf7_hcb6z wm-shadow"/><path class="e5t5j33_q wm-shine"/><path class="wm-shine zoctaccxe"/></g>`,
		"fallback": "withicons-valentine:badge-check",
	});
}

export default Component;
