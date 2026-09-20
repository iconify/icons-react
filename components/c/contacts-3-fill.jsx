import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8b5ddb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8b5ddb7h"/>`,
		"fallback": "mingcute:contacts-3-fill",
	});
}

export default Component;
