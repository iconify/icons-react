import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-x8u3b8q.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-x8u3b8q"/>`,
		"fallback": "whh:flowerpot",
	});
}

export default Component;
