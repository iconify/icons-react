import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_p6g6b5e.css';
import '../../css/i/i7-8_6n_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r_p6g6b5e wm-k"/><path class="i7-8_6n_p wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-fluffy-gloss",
	});
}

export default Component;
