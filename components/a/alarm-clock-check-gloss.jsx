import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x-4qzacwm.css';
import '../../css/i/i5kdpy8yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k x-4qzacwm"/><path class="i5kdpy8yg wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-check-gloss",
	});
}

export default Component;
