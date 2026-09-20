import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mshpjx5hv.css';
import '../../css/c/ch15pybdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mshpjx5hv"/><path class="ch15pybdl"/></g>`,
		"fallback": "keyline-icons:caret-up-two-tone",
	});
}

export default Component;
