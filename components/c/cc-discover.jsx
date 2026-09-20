import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r99c2sbus.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r99c2sbus"/>`,
		"fallback": "la:cc-discover",
	});
}

export default Component;
