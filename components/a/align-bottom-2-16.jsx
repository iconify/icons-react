import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo0pu5bsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo0pu5bsa"/>`,
		"fallback": "qlementine-icons:align-bottom-2-16",
	});
}

export default Component;
