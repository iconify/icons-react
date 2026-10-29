import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwkco47_d.css';
import '../../css/k/k89hfgloi.css';
import '../../css/z/zoiwa9bvm.css';
import '../../css/g/g0w_m7lbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kwkco47_d"/><path class="k89hfgloi wm-a"/><path class="wm-k zoiwa9bvm"/><path class="g0w_m7lbe wm-a"/></g>`,
		"fallback": "withicons:coins-sketch",
	});
}

export default Component;
