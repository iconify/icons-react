import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i19g0i_wl.css';
import '../../css/j/jgwi2aczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i19g0i_wl wm-k"/><path class="jgwi2aczb wm-a"/></g>`,
		"fallback": "withicons:airplay-gloss",
	});
}

export default Component;
