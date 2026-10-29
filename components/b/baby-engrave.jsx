import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/seejxhb6k.css';
import '../../css/u/uisobyeyf.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/y/y23w8kzbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="seejxhb6k"/><path class="uisobyeyf wm-shadow"/><path class="wc_hv_34n"/><path class="y23w8kzbh"/></g>`,
		"fallback": "withicons:baby-engrave",
	});
}

export default Component;
