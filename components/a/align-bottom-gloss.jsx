import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ip02-5g2a.css';
import '../../css/w/wwa2fcb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ip02-5g2a wm-k"/><path class="wm-a wwa2fcb3v"/></g>`,
		"fallback": "withicons:align-bottom-gloss",
	});
}

export default Component;
