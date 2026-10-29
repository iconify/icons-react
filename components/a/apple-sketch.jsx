import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nobnx9o2t.css';
import '../../css/p/p_bg0sbcz.css';
import '../../css/c/ckv6b3snt.css';
import '../../css/r/rhnvyuptx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nobnx9o2t"/><path class="p_bg0sbcz wm-a"/><path class="ckv6b3snt wm-k"/><path class="rhnvyuptx wm-a"/></g>`,
		"fallback": "withicons:apple-sketch",
	});
}

export default Component;
