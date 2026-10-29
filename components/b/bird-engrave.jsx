import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xvjrys-1s.css';
import '../../css/x/xtz53xfqp.css';
import '../../css/f/fo_32oblh.css';
import '../../css/q/qz-3_0bjm.css';
import '../../css/z/z0orz_bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xvjrys-1s"/><path class="wm-a xtz53xfqp"/><path class="fo_32oblh wm-shadow"/><path class="qz-3_0bjm wm-k"/><path class="wm-a z0orz_bkb"/></g>`,
		"fallback": "withicons:bird-engrave",
	});
}

export default Component;
