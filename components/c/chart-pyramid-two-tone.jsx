import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fpm4c09pq.css';
import '../../css/r/ra9itomeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fpm4c09pq"/><path class="ra9itomeu"/></g>`,
		"fallback": "keyline-icons:chart-pyramid-two-tone",
	});
}

export default Component;
