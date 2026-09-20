import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tf21_g3ng.css';
import '../../css/m/mu7-ho2lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tf21_g3ng"/><path class="mu7-ho2lf"/></g>`,
		"fallback": "keyline-icons:eye-two-tone",
	});
}

export default Component;
