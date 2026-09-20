import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2zb1eblm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2zb1eblm"/>`,
		"fallback": "simple-line-icons:cup",
	});
}

export default Component;
