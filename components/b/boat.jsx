import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ronvc96ks.css';
import '../../css/e/eg5ji7bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ronvc96ks"/><path class="eg5ji7bsf"/></g>`,
		"fallback": "akar-icons:boat",
	});
}

export default Component;
