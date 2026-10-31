import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbroity_m.css';
import '../../css/l/l8dp9ebhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tbroity_m wm-k"/><path class="l8dp9ebhy wm-a"/></g>`,
		"fallback": "withicons:arrow-down-to-line-gloss",
	});
}

export default Component;
