import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7fgelrsa.css';

const viewBox = {"width":1792,"height":1376};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7fgelrsa"/>`,
		"fallback": "fa:eye-slash",
	});
}

export default Component;
