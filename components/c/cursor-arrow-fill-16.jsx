import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e01znbbdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e01znbbdx"/>`,
		"fallback": "garden:cursor-arrow-fill-16",
	});
}

export default Component;
