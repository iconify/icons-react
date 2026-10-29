import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hg3_bfhyx.css';
import '../../css/i/irfaq0_lu.css';
import '../../css/f/fmp-5vctz.css';
import '../../css/m/m9kc8fbca.css';
import '../../css/o/ocqlkk5_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hg3_bfhyx"/><path class="irfaq0_lu wm-shadow"/><path class="fmp-5vctz"/><path class="m9kc8fbca"/><path class="ocqlkk5_u"/></g>`,
		"fallback": "withicons:firecracker-engrave",
	});
}

export default Component;
