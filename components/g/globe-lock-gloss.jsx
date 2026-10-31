import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rezbhfbvt.css';
import '../../css/k/kf466gbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rezbhfbvt wm-k"/><path class="kf466gbgi wm-s"/></g>`,
		"fallback": "withicons:globe-lock-gloss",
	});
}

export default Component;
