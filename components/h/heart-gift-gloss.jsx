import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ngby09brd.css';
import '../../css/q/q-jjcwbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ngby09brd wm-k"/><path class="q-jjcwbgo wm-s"/></g>`,
		"fallback": "withicons:heart-gift-gloss",
	});
}

export default Component;
