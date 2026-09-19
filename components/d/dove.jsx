import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmz8a93qj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmz8a93qj"/>`,
		"fallback": "fa6-solid:dove",
	});
}

export default Component;
