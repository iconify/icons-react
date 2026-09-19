import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8vnd1byk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8vnd1byk"/>`,
		"fallback": "fa7-solid:circle-nodes",
	});
}

export default Component;
