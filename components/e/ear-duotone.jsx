import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt28q7bvo.css';
import '../../css/l/lduibh4wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gt28q7bvo"/><path class="lduibh4wl"/></g>`,
		"fallback": "keyline-icons:ear-duotone",
	});
}

export default Component;
