import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tel200bxj.css';
import '../../css/a/ay-iwpbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tel200bxj"/><path class="ay-iwpbjk"/></g>`,
		"fallback": "keyline-icons:coins-fill",
	});
}

export default Component;
