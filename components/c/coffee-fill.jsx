import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gpwgbtbyz.css';
import '../../css/y/yb7gcsbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gpwgbtbyz"/><path class="yb7gcsbcq"/></g>`,
		"fallback": "keyline-icons:coffee-fill",
	});
}

export default Component;
