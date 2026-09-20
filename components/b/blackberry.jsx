import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd85a1byy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd85a1byy"/>`,
		"fallback": "la:blackberry",
	});
}

export default Component;
