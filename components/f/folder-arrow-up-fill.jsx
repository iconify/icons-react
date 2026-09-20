import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu4ug0b5t.css';
import '../../css/j/j5_39sbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tu4ug0b5t"/><path class="j5_39sbhj"/></g>`,
		"fallback": "keyline-icons:folder-arrow-up-fill",
	});
}

export default Component;
