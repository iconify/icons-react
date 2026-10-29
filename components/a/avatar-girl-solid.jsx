import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w6qgt_bwk.css';
import '../../css/e/e8v2-lbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w6qgt_bwk"/><path class="e8v2-lbil wm-a"/></g>`,
		"fallback": "withicons:avatar-girl-solid",
	});
}

export default Component;
