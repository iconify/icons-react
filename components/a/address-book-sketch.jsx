import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hu-l19bkb.css';
import '../../css/i/i0uwx_b1z.css';
import '../../css/v/vc76h5b8i.css';
import '../../css/c/c1313sbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hu-l19bkb"/><path class="i0uwx_b1z wm-a"/><path class="vc76h5b8i wm-k"/><path class="c1313sbwo wm-a"/></g>`,
		"fallback": "withicons:address-book-sketch",
	});
}

export default Component;
