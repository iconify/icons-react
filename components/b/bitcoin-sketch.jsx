import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r0k_789eh.css';
import '../../css/z/zgq5wtbpl.css';
import '../../css/k/k119jwb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r0k_789eh wm-k"/><path class="wm-k zgq5wtbpl"/><path class="k119jwb1b wm-a"/></g>`,
		"fallback": "withicons:bitcoin-sketch",
	});
}

export default Component;
