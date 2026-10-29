import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/usuo7wblk.css';
import '../../css/o/oj2nrac_h.css';
import '../../css/e/e-e-cxbmn.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/k3tex3kws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="usuo7wblk wm-k"/><path class="oj2nrac_h wm-a"/><path class="e-e-cxbmn wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="k3tex3kws wm-a"/></g>`,
		"fallback": "withicons:baseball-engrave",
	});
}

export default Component;
