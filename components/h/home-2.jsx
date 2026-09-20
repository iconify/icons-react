import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0h42yj7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0h42yj7s"/>`,
		"fallback": "subway:home-2",
	});
}

export default Component;
