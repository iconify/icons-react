import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ig4b4sbnr.css';
import '../../css/i/idrdoljab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ig4b4sbnr"/><path class="idrdoljab"/></g>`,
		"fallback": "vadivam:ad",
	});
}

export default Component;
