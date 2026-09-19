import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rknc7jbob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rknc7jbob"/>`,
		"fallback": "bi:grid-3x3-gap",
	});
}

export default Component;
