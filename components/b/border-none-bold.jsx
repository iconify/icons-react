import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2fmwm2av.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2fmwm2av"/>`,
		"fallback": "pullo:border-none-bold",
	});
}

export default Component;
