import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m19lpcb0d.css';
import '../../css/t/tf6q4k9qf.css';
import '../../css/p/puozkrmyl.css';
import '../../css/u/urb3kpbld.css';
import '../../css/i/idk2wtbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m19lpcb0d wm-k"/><path class="tf6q4k9qf wm-a"/><path class="puozkrmyl wm-shadow"/><path class="urb3kpbld wm-k"/><path class="idk2wtbbi wm-a"/></g>`,
		"fallback": "withicons:droplets-engrave",
	});
}

export default Component;
