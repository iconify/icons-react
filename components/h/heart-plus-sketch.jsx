import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g_3c4xboi.css';
import '../../css/t/t201aeb7o.css';
import '../../css/p/pymwtrb1e.css';
import '../../css/t/t_h-3qd1c.css';
import '../../css/v/vmrq-dbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g_3c4xboi"/><path class="t201aeb7o wm-k"/><path class="pymwtrb1e wm-s"/><path class="t_h-3qd1c wm-k"/><path class="vmrq-dbxi wm-s"/></g>`,
		"fallback": "withicons:heart-plus-sketch",
	});
}

export default Component;
