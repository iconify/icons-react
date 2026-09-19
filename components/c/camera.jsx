import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmr362b-r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmr362b-r"/>`,
		"fallback": "fa7-solid:camera",
	});
}

export default Component;
