import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1x3--bay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1x3--bay"/>`,
		"fallback": "carbon:earth-americas-filled",
	});
}

export default Component;
