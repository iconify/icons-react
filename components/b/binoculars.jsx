import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inr8_8btz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inr8_8btz"/>`,
		"fallback": "fa7-solid:binoculars",
	});
}

export default Component;
