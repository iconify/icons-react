import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fo5e-ozxe.css';
import '../../css/t/tjvuacchn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fo5e-ozxe"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:alert-duotone",
	});
}

export default Component;
