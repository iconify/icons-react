import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pozikky5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pozikky5q"/>`,
		"fallback": "ix:full-screen",
	});
}

export default Component;
