import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/o/ohm6udbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="ohm6udbbk"/></g>`,
		"fallback": "keyline-icons:cloud-minus-duotone",
	});
}

export default Component;
