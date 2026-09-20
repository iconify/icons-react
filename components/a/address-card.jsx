import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsuz01gsk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsuz01gsk"/>`,
		"fallback": "la:address-card",
	});
}

export default Component;
