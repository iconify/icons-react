import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i0hl2x5zy.css';
import '../../css/n/n87wq02dx.css';
import '../../css/h/hdrn7h4ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i0hl2x5zy wm-a"/><path class="n87wq02dx wm-k"/><path class="hdrn7h4ca wm-a"/></g>`,
		"fallback": "withicons:bike-sketch",
	});
}

export default Component;
