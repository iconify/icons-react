import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emob7kbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emob7kbqo"/>`,
		"fallback": "mdi:arrow-bottom-bold",
	});
}

export default Component;
