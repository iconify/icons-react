import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/b/b46u89b7h.css';
import '../../css/v/v8bw9nbrg.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/r/rad68db9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="b46u89b7h wm-a"/><path class="v8bw9nbrg wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="rad68db9z wm-a"/></g>`,
		"fallback": "withicons:cloud-rain-wind-engrave",
	});
}

export default Component;
