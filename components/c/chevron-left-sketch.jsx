import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sw531mb4i.css';
import '../../css/t/tdvd_6b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sw531mb4i wm-k"/><path class="tdvd_6b2x wm-k"/></g>`,
		"fallback": "withicons:chevron-left-sketch",
	});
}

export default Component;
