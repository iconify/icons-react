import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4srdrbby.css';
import '../../css/p/pmthguzrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4srdrbby"/><path class="pmthguzrr"/></g>`,
		"fallback": "keyline-icons:alarm-clock-minus-two-tone",
	});
}

export default Component;
