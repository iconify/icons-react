import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n8avyrinm.css';
import '../../css/d/dby3u6u6j.css';
import '../../css/p/pez66rbtr.css';
import '../../css/t/t_iyb2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n8avyrinm wm-k"/><path class="dby3u6u6j wm-shadow"/><path class="pez66rbtr wm-k"/><path class="t_iyb2b1h wm-a"/></g>`,
		"fallback": "withicons:egg-engrave",
	});
}

export default Component;
