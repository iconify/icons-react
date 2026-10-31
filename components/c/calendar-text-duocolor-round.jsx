import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tsvm1i1eq.css';
import '../../css/w/woc5lccts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tsvm1i1eq"/><path class="woc5lccts"/></g>`,
		"fallback": "coolicons:calendar-text-duocolor-round",
	});
}

export default Component;
