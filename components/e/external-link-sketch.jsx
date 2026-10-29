import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lotq6lz7v.css';
import '../../css/f/f68n4ubpd.css';
import '../../css/w/wushw_bfm.css';
import '../../css/f/f_a_1pbso.css';
import '../../css/h/hk66w8b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lotq6lz7v"/><path class="f68n4ubpd wm-k"/><path class="wm-a wushw_bfm"/><path class="f_a_1pbso wm-k"/><path class="hk66w8b5e wm-a"/></g>`,
		"fallback": "withicons:external-link-sketch",
	});
}

export default Component;
