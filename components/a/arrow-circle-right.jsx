import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvkwf439u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvkwf439u"/>`,
		"fallback": "fa7-solid:arrow-circle-right",
	});
}

export default Component;
