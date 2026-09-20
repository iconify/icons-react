import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s7dz5x3on.css';
import '../../css/c/c0f9vmb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s7dz5x3on"/><path class="c0f9vmb9l"/></g>`,
		"fallback": "keyline-icons:bug-fill",
	});
}

export default Component;
