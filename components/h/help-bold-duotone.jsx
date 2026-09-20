import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxhd4u6wf.css';
import '../../css/s/s09r3n6gp.css';
import '../../css/i/ip6p_nbsf.css';
import '../../css/g/gwb_7vbte.css';
import '../../css/e/e-kae66_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gxhd4u6wf"/><path class="s09r3n6gp"/><path class="ip6p_nbsf"/><path class="gwb_7vbte"/><path class="e-kae66_r"/></g>`,
		"fallback": "solar:help-bold-duotone",
	});
}

export default Component;
