import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4y45gb9n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4y45gb9n"/>`,
		"fallback": "whh:dart",
	});
}

export default Component;
