import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s7x9qr2jk.css';
import '../../css/p/p2r-q7b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s7x9qr2jk wm-k"/><path class="p2r-q7b3v wm-a"/></g>`,
		"fallback": "withicons:chart-bar-increasing-gloss",
	});
}

export default Component;
