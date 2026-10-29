import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/ggsvqryfu.css';
import '../../css/o/o4glqtmfc.css';
import '../../css/d/dq2306bcc.css';
import '../../css/o/ogtxsja6z.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/h/hs0-4wbbr.css';
import '../../css/h/hmnowib5p.css';
import '../../css/m/mqpl4gryu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ggsvqryfu wm-k"/><path class="o4glqtmfc wm-a"/><path class="dq2306bcc wm-shadow"/><path class="ogtxsja6z wm-k"/><path class="d3y9mw6db wm-k"/><path class="hs0-4wbbr wm-a"/><path class="hmnowib5p wm-a"/><path class="mqpl4gryu wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban-engrave",
	});
}

export default Component;
