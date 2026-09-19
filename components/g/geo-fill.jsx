import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h65hj0frx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h65hj0frx"/>`,
		"fallback": "bi:geo-fill",
	});
}

export default Component;
