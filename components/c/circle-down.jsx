import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9rh5p0qp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9rh5p0qp"/>`,
		"fallback": "fa7-solid:circle-down",
	});
}

export default Component;
