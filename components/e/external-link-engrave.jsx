import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eognsbuin.css';
import '../../css/x/x-xm49bpd.css';
import '../../css/p/pqkdp8bps.css';
import '../../css/v/vanl12bnz.css';
import '../../css/h/h7btge1_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eognsbuin wm-k"/><path class="wm-a x-xm49bpd"/><path class="pqkdp8bps wm-shadow"/><path class="vanl12bnz wm-k"/><path class="h7btge1_e wm-a"/></g>`,
		"fallback": "withicons:external-link-engrave",
	});
}

export default Component;
