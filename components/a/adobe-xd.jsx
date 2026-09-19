import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntk5uyc5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntk5uyc5q"/>`,
		"fallback": "file-icons:adobe-xd",
	});
}

export default Component;
