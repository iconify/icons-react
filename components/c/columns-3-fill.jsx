import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvicvcb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvicvcb9v"/>`,
		"fallback": "mingcute:columns-3-fill",
	});
}

export default Component;
