import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lgreg-b0h.css';
import '../../css/t/tejekv0yd.css';
import '../../css/g/gp-44obuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lgreg-b0h wm-k"/><path class="tejekv0yd wm-k"/><path class="gp-44obuf wm-a"/></g>`,
		"fallback": "withicons:crosshair-sketch",
	});
}

export default Component;
