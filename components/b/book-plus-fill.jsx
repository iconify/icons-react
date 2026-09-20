import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur5we9b1t.css';
import '../../css/e/enohqx70x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ur5we9b1t"/><path class="enohqx70x"/></g>`,
		"fallback": "keyline-icons:book-plus-fill",
	});
}

export default Component;
