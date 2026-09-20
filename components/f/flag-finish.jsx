import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e23ljnddz.css';
import '../../css/i/id7w5d0cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e23ljnddz"/><path class="id7w5d0cr"/></g>`,
		"fallback": "lets-icons:flag-finish",
	});
}

export default Component;
