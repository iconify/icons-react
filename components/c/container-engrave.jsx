import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/doky59b1a.css';
import '../../css/d/dskoxmboo.css';
import '../../css/g/gc_-hub4z.css';
import '../../css/t/tsqe1pboz.css';
import '../../css/l/lq23_x48i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="doky59b1a wm-k"/><path class="dskoxmboo wm-shadow"/><path class="gc_-hub4z wm-k"/><path class="tsqe1pboz wm-k"/><path class="lq23_x48i wm-a"/></g>`,
		"fallback": "withicons:container-engrave",
	});
}

export default Component;
