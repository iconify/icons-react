import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu4ug0b5t.css';
import '../../css/e/e4yqo5d-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tu4ug0b5t"/><path class="e4yqo5d-l"/></g>`,
		"fallback": "keyline-icons:folder-minus-fill",
	});
}

export default Component;
