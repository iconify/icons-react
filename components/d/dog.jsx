import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzs052bzl.css';

const viewBox = {"width":1022,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzs052bzl"/>`,
		"fallback": "whh:dog",
	});
}

export default Component;
