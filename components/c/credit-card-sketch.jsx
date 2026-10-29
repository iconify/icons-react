import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnabr02rn.css';
import '../../css/g/gi1cpjbgb.css';
import '../../css/f/f878cac8p.css';
import '../../css/l/ldpho9bqh.css';
import '../../css/p/p0qrfj54q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rnabr02rn wm-k"/><path class="gi1cpjbgb wm-k"/><path class="f878cac8p wm-k"/><path class="ldpho9bqh wm-a"/><path class="p0qrfj54q wm-s"/></g>`,
		"fallback": "withicons:credit-card-sketch",
	});
}

export default Component;
