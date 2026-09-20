import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fpm4c09pq.css';
import '../../css/t/tqdd8nb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fpm4c09pq"/><path class="tqdd8nb1e"/></g>`,
		"fallback": "keyline-icons:chart-pyramid-duotone",
	});
}

export default Component;
