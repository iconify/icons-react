import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb3g6wplf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb3g6wplf"/>`,
		"fallback": "charm:chart-line",
	});
}

export default Component;
