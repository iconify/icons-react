import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf9hn5q-e.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf9hn5q-e"/>`,
		"fallback": "ps:github-alt",
	});
}

export default Component;
