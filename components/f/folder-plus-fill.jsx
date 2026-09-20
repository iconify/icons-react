import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu4ug0b5t.css';
import '../../css/k/khifo6t8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tu4ug0b5t"/><path class="khifo6t8d"/></g>`,
		"fallback": "keyline-icons:folder-plus-fill",
	});
}

export default Component;
