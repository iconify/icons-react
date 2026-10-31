import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hrxw0upjl.css';
import '../../css/z/z5c82xbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hrxw0upjl wm-k"/><path class="wm-a z5c82xbou"/></g>`,
		"fallback": "withicons:highlighter-gloss",
	});
}

export default Component;
