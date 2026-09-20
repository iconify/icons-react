import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp6w4xkla.css';
import '../../css/o/oqs_nbntp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yp6w4xkla"/><path class="oqs_nbntp"/></g>`,
		"fallback": "keyline-icons:bell-check-two-tone",
	});
}

export default Component;
