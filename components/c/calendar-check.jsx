import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w3xd78b5b.css';
import '../../css/p/pjr0yofbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w3xd78b5b"/><path class="pjr0yofbb"/></g>`,
		"fallback": "vadivam:calendar-check",
	});
}

export default Component;
