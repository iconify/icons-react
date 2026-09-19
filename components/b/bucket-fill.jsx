import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph1egc8-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph1egc8-q"/>`,
		"fallback": "at-icons:bucket-fill",
	});
}

export default Component;
