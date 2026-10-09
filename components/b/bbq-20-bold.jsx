import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcx_6xb7j.css';
import '../../css/w/wzhdi44yk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcx_6xb7j"/><path class="wzhdi44yk"/>`,
		"fallback": "energy-icons:bbq-20-bold",
	});
}

export default Component;
