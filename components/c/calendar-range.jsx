import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw5c2fbzy.css';
import '../../css/p/pi-qvrb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yw5c2fbzy"/><path class="pi-qvrb9g"/></g>`,
		"fallback": "vadivam:calendar-range",
	});
}

export default Component;
