import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t0b1libpf.css';
import '../../css/c/c2ocl1n7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t0b1libpf"/><path class="c2ocl1n7v"/></g>`,
		"fallback": "vadivam:calendar-1",
	});
}

export default Component;
