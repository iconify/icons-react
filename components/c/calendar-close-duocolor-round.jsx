import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cr709fn9c.css';
import '../../css/w/woc5lccts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cr709fn9c"/><path class="woc5lccts"/></g>`,
		"fallback": "coolicons:calendar-close-duocolor-round",
	});
}

export default Component;
