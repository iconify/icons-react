import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hi-agbuvl.css';
import '../../css/k/kxnrrvbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hi-agbuvl"/><path class="kxnrrvbeb"/></g>`,
		"fallback": "vadivam:calendar-arrow-right",
	});
}

export default Component;
