import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lpkg20bgh.css';
import '../../css/v/viujxjhbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lpkg20bgh"/><path class="viujxjhbz"/></g>`,
		"fallback": "keyline-icons:camera-sparkles-fill",
	});
}

export default Component;
