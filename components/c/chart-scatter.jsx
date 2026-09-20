import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yo50hku1m.css';
import '../../css/e/e0lsgjt3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yo50hku1m"/><path class="e0lsgjt3k"/></g>`,
		"fallback": "keyline-icons:chart-scatter",
	});
}

export default Component;
