import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfjn8jbeg.css';
import '../../css/e/erj8c7bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfjn8jbeg"/><path class="erj8c7bvm"/></g>`,
		"fallback": "keyline-icons:baby-girl-fill",
	});
}

export default Component;
