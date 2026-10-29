import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t74_kibuv.css';
import '../../css/j/j33chbdtj.css';
import '../../css/y/yr0n5pb1l.css';
import '../../css/e/et26kmbjm.css';
import '../../css/p/pxmffbcsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t74_kibuv wm-k"/><path class="j33chbdtj wm-k"/><path class="wm-k yr0n5pb1l"/><path class="et26kmbjm wm-a"/><path class="pxmffbcsz wm-s"/></g>`,
		"fallback": "withicons:film-sketch",
	});
}

export default Component;
