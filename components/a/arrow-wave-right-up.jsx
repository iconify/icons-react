import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amhlmpbjr.css';
import '../../css/y/yn8y2db9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amhlmpbjr"/><path class="yn8y2db9y"/></g>`,
		"fallback": "tabler:arrow-wave-right-up",
	});
}

export default Component;
