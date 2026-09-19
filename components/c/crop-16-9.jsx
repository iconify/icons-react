import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0iw95o7k.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0iw95o7k"/>`,
		"fallback": "zmdi:crop-16-9",
	});
}

export default Component;
