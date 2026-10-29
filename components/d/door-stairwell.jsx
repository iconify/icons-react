import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hl0_fhxpy.css';
import '../../css/w/wsqb_08nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hl0_fhxpy"/><path class="wsqb_08nl"/></g>`,
		"fallback": "vadivam:door-stairwell",
	});
}

export default Component;
