import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd3xg04we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd3xg04we"/>`,
		"fallback": "mdi:apple-keyboard-control",
	});
}

export default Component;
