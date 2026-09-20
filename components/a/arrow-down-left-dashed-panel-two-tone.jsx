import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/es1ry8oas.css';
import '../../css/g/gp0bdx8ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="es1ry8oas"/><path class="gp0bdx8ih"/></g>`,
		"fallback": "keyline-icons:arrow-down-left-dashed-panel-two-tone",
	});
}

export default Component;
