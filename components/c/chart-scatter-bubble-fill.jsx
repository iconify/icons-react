import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naxjwzb-c.css';
import '../../css/y/yo50hku1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="naxjwzb-c"/><path class="yo50hku1m"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-fill",
	});
}

export default Component;
