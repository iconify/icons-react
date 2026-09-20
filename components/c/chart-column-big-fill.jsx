import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s13xe7q1a.css';
import '../../css/y/yo50hku1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s13xe7q1a"/><path class="yo50hku1m"/></g>`,
		"fallback": "keyline-icons:chart-column-big-fill",
	});
}

export default Component;
