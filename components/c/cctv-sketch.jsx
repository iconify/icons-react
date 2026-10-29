import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uirmoybtc.css';
import '../../css/g/giv9t3b7u.css';
import '../../css/v/vq_hj5vyc.css';
import '../../css/b/bhooqk0tq.css';
import '../../css/q/qry8g136a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uirmoybtc"/><path class="giv9t3b7u wm-k"/><path class="vq_hj5vyc wm-a"/><path class="bhooqk0tq wm-k"/><path class="qry8g136a wm-a"/></g>`,
		"fallback": "withicons:cctv-sketch",
	});
}

export default Component;
