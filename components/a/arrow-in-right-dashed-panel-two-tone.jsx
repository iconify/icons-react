import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/es1ry8oas.css';
import '../../css/f/fsp6qkevj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="es1ry8oas"/><path class="fsp6qkevj"/></g>`,
		"fallback": "keyline-icons:arrow-in-right-dashed-panel-two-tone",
	});
}

export default Component;
