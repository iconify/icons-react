import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oevl6j0cm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oevl6j0cm"/>`,
		"fallback": "oi:action-redo",
	});
}

export default Component;
