import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cdc5vzt4i.css';
import '../../css/c/c3zx4wb8x.css';
import '../../css/a/ayvyc-bzt.css';
import '../../css/b/bxfjj6b5x.css';
import '../../css/q/qona0r9cp.css';
import '../../css/t/tgjb79b1x.css';
import '../../css/e/ev7ed5btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cdc5vzt4i wm-shine"/><path class="c3zx4wb8x wm-k"/><path class="ayvyc-bzt wm-k"/><path class="bxfjj6b5x wm-a"/><path class="qona0r9cp wm-a"/><path class="tgjb79b1x wm-s"/><path class="ev7ed5btm wm-s"/></g>`,
		"fallback": "withicons:gavel-sketch",
	});
}

export default Component;
