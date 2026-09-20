import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzk-r7a0m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzk-r7a0m"/>`,
		"fallback": "pepicons-pencil:bank",
	});
}

export default Component;
