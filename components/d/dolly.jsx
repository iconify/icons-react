import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd_q8ew-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd_q8ew-y"/>`,
		"fallback": "la:dolly",
	});
}

export default Component;
