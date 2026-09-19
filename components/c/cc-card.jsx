import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0nttob5e.css';

const viewBox = {"width":2368,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0nttob5e"/>`,
		"fallback": "vs:cc-card",
	});
}

export default Component;
