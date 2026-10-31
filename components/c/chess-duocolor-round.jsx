import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mhz__qb-e.css';
import '../../css/l/l-z7x0gba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mhz__qb-e"/><path class="l-z7x0gba"/></g>`,
		"fallback": "coolicons:chess-duocolor-round",
	});
}

export default Component;
