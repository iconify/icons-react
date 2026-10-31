import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu0uwrb0e.css';
import '../../css/c/c4mutqv1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qu0uwrb0e"/><path class="c4mutqv1p"/></g>`,
		"fallback": "coolicons:drill-duocolor-round",
	});
}

export default Component;
