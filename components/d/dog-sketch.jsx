import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwuxk_f7w.css';
import '../../css/r/rk-8ablxs.css';
import '../../css/j/jfgbi4k4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dwuxk_f7w wm-k"/><path class="rk-8ablxs wm-k"/><path class="jfgbi4k4h wm-a"/></g>`,
		"fallback": "withicons:dog-sketch",
	});
}

export default Component;
