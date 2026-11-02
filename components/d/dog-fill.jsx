import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvnro6b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvnro6b7h"/>`,
		"fallback": "mingcute:dog-fill",
	});
}

export default Component;
