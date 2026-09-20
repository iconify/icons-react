import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8c5dcbly.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8c5dcbly"/>`,
		"fallback": "memory:checkerboard",
	});
}

export default Component;
