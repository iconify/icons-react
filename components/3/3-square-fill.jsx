import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwl79gqjz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwl79gqjz"/>`,
		"fallback": "bi:3-square-fill",
	});
}

export default Component;
