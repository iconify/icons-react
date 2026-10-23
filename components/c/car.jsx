import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hohatw9cb.css';
import '../../css/x/x_3w8m6xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hohatw9cb"/><path class="x_3w8m6xy"/></g>`,
		"fallback": "vadivam:car",
	});
}

export default Component;
