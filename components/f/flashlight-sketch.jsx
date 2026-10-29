import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d8_t8lbuc.css';
import '../../css/z/ztqy_vbrk.css';
import '../../css/n/ni4t_eb3e.css';
import '../../css/v/vokqhtb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d8_t8lbuc"/><path class="wm-k ztqy_vbrk"/><path class="ni4t_eb3e wm-a"/><path class="vokqhtb2z wm-s"/></g>`,
		"fallback": "withicons:flashlight-sketch",
	});
}

export default Component;
