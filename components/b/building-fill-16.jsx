import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sym2kf7vy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sym2kf7vy"/>`,
		"fallback": "garden:building-fill-16",
	});
}

export default Component;
