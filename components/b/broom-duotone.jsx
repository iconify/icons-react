import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dw02l9-ww.css';
import '../../css/m/m4cfm1bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dw02l9-ww"/><path class="m4cfm1bym"/></g>`,
		"fallback": "keyline-icons:broom-duotone",
	});
}

export default Component;
