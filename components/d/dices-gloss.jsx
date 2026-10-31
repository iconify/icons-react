import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pbkcg9bjr.css';
import '../../css/r/r6o4-eb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pbkcg9bjr wm-k"/><path class="r6o4-eb3b wm-a"/></g>`,
		"fallback": "withicons:dices-gloss",
	});
}

export default Component;
