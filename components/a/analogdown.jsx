import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xne84kbwo.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xne84kbwo"/>`,
		"fallback": "whh:analogdown",
	});
}

export default Component;
