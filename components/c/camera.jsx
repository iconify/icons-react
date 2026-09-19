import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1__ap57y.css';
import '../../css/f/fhzkr4_3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1__ap57y"/><circle class="fhzkr4_3z"/></g>`,
		"fallback": "feather:camera",
	});
}

export default Component;
