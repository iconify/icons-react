import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/swjw8utmb.css';
import '../../css/i/i-q4x88yc.css';
import '../../css/d/d6q4sp3-o.css';
import '../../css/z/zaja4-btu.css';
import '../../css/w/w38foqb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="swjw8utmb"/><path class="i-q4x88yc wm-k"/><path class="d6q4sp3-o wm-a"/><path class="wm-k zaja4-btu"/><path class="w38foqb-l wm-a"/></g>`,
		"fallback": "withicons:carrot-sketch",
	});
}

export default Component;
