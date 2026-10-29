import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hwhho5byv.css';
import '../../css/i/i5h7uqh1e.css';
import '../../css/d/dauhxcish.css';
import '../../css/y/y836pq2wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hwhho5byv"/><path class="i5h7uqh1e wm-a"/><path class="dauhxcish wm-k"/><path class="wm-a y836pq2wl"/></g>`,
		"fallback": "withicons:help-circle-sketch",
	});
}

export default Component;
