import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5amb42ut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5amb42ut"/>`,
		"fallback": "catppuccin:docker-ignore",
	});
}

export default Component;
