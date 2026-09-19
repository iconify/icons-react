import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j92jj3b8h.css';
import '../../css/w/wh8ezzf6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="j92jj3b8h"/><path class="wh8ezzf6j"/>`,
		"fallback": "ion:albums-outline",
	});
}

export default Component;
