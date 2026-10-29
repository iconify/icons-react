import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bl2z4vbpn.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/p/ph-75l5jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bl2z4vbpn wm-k"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="ph-75l5jk wm-s"/></g>`,
		"fallback": "withicons:heart-plus-engrave",
	});
}

export default Component;
