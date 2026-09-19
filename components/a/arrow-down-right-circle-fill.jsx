import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f86d5ub3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f86d5ub3e"/>`,
		"fallback": "bi:arrow-down-right-circle-fill",
	});
}

export default Component;
