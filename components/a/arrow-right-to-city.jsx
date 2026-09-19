import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7qbhwd3h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7qbhwd3h"/>`,
		"fallback": "fa6-solid:arrow-right-to-city",
	});
}

export default Component;
