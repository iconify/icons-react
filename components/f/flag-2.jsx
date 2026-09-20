import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0oyn11ps.css';
import '../../css/w/wcn0lvn6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0oyn11ps"/><path class="wcn0lvn6h"/></g>`,
		"fallback": "tdesign:flag-2",
	});
}

export default Component;
