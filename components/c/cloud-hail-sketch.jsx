import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/or3g_fb0y.css';
import '../../css/o/o_52rxb2b.css';
import '../../css/w/whx2ksbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="or3g_fb0y"/><path class="o_52rxb2b wm-k"/><path class="whx2ksbdp wm-a"/></g>`,
		"fallback": "withicons:cloud-hail-sketch",
	});
}

export default Component;
