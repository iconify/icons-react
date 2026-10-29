import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j_ndhtijc.css';
import '../../css/a/abdpkjbfc.css';
import '../../css/w/wi57tslpl.css';
import '../../css/s/sx0or_bfv.css';
import '../../css/q/qb8yovbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j_ndhtijc"/><path class="abdpkjbfc wm-k"/><path class="wi57tslpl wm-a"/><path class="sx0or_bfv"/><path class="qb8yovbej wm-s"/></g>`,
		"fallback": "withicons:eye-off-sketch",
	});
}

export default Component;
