import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcedpab5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcedpab5q"/>`,
		"fallback": "bi:box2-fill",
	});
}

export default Component;
