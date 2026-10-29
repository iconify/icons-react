import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fstdpfbpb.css';
import '../../css/x/xx0opqa2p.css';
import '../../css/x/x66npnb9v.css';
import '../../css/q/qzjcltb8z.css';
import '../../css/p/pnvt6qvuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fstdpfbpb"/><path class="wm-k xx0opqa2p"/><path class="wm-a x66npnb9v"/><path class="qzjcltb8z wm-k"/><path class="pnvt6qvuv wm-a"/></g>`,
		"fallback": "withicons:flask-conical-sketch",
	});
}

export default Component;
