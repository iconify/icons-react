import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsre1t1xa.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsre1t1xa"/>`,
		"fallback": "fa-brands:airbnb",
	});
}

export default Component;
