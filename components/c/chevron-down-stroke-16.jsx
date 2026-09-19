import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b86blp5az.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b86blp5az"/>`,
		"fallback": "garden:chevron-down-stroke-16",
	});
}

export default Component;
