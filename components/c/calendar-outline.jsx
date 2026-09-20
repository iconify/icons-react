import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/figod8j4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="figod8j4v"/>`,
		"fallback": "lsicon:calendar-outline",
	});
}

export default Component;
