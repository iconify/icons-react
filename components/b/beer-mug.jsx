import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-ppciqka.css';
import '../../css/j/jzyt2acev.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-ppciqka"/><path class="jzyt2acev"/></g>`,
		"fallback": "streamline-color:beer-mug",
	});
}

export default Component;
