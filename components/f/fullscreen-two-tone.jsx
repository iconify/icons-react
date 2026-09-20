import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zq7x653mj.css';
import '../../css/z/z14q86kcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zq7x653mj"/><path class="z14q86kcr"/></g>`,
		"fallback": "keyline-icons:fullscreen-two-tone",
	});
}

export default Component;
