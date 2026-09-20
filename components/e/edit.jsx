import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpb2wnqoi.css';
import '../../css/h/hghm4ubpk.css';
import '../../css/n/ncr0rib2u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/i-k--m3cg.css';
import '../../css/h/hx3n1ybjf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpb2wnqoi"/><path class="hghm4ubpk"/><path class="ncr0rib2u"/><g class="ij2x_72vy"><path class="i-k--m3cg"/><path class="hx3n1ybjf"/></g>`,
		"fallback": "openmoji:edit",
	});
}

export default Component;
