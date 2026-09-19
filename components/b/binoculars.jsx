import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0nvo9bct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0nvo9bct"/>`,
		"fallback": "icons8:binoculars",
	});
}

export default Component;
