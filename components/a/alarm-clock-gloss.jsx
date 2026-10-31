import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ueczak47s.css';
import '../../css/i/i5kdpy8yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ueczak47s wm-k"/><path class="i5kdpy8yg wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-gloss",
	});
}

export default Component;
