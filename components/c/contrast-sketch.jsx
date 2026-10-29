import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n0hxhlb-h.css';
import '../../css/l/l-l2pfuww.css';
import '../../css/y/y-uaqkbak.css';
import '../../css/r/rp9nrr50p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n0hxhlb-h"/><path class="l-l2pfuww wm-a"/><path class="wm-k y-uaqkbak"/><path class="rp9nrr50p wm-a"/></g>`,
		"fallback": "withicons:contrast-sketch",
	});
}

export default Component;
