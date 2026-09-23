import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ni-5t0otd.css';
import '../../css/y/y38azubfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ni-5t0otd"/><path class="y38azubfo"/></g>`,
		"fallback": "keyline-icons:handbag-sparkles",
	});
}

export default Component;
