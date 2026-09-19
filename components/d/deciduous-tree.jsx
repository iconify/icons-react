import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nshr6y52x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nshr6y52x"/>`,
		"fallback": "fluent-emoji-high-contrast:deciduous-tree",
	});
}

export default Component;
