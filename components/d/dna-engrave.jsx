import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a9sqkvb_m.css';
import '../../css/a/a4pwcccxv.css';
import '../../css/x/x4522uhjs.css';
import '../../css/n/nk-54lbig.css';
import '../../css/w/wrkbx9bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a9sqkvb_m wm-k"/><path class="a4pwcccxv wm-shadow"/><path class="wm-k x4522uhjs"/><path class="nk-54lbig wm-k"/><path class="wm-a wrkbx9bny"/></g>`,
		"fallback": "withicons:dna-engrave",
	});
}

export default Component;
