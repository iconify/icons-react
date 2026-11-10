import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1ew4b0vu.css';
import '../../css/n/nnusg_b2p.css';
import '../../css/e/emm5lbblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1ew4b0vu"/><path class="nnusg_b2p"/><path class="emm5lbblk"/></g>`,
		"fallback": "andrsrxn:fire-alarm",
	});
}

export default Component;
