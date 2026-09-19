import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8o9vzk6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8o9vzk6e"/>`,
		"fallback": "charm:copy",
	});
}

export default Component;
