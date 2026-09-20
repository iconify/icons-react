import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ottw1fb6m.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ottw1fb6m"/>`,
		"fallback": "system-uicons:chat-add",
	});
}

export default Component;
