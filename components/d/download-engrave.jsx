import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z4cu88gpg.css';
import '../../css/v/vrnnnjbra.css';
import '../../css/e/e6k4xt8_u.css';
import '../../css/l/lw875-p4x.css';
import '../../css/y/yohw-bcjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z4cu88gpg"/><path class="vrnnnjbra wm-a"/><path class="e6k4xt8_u wm-shadow"/><path class="lw875-p4x wm-k"/><path class="wm-a yohw-bcjc"/></g>`,
		"fallback": "withicons:download-engrave",
	});
}

export default Component;
