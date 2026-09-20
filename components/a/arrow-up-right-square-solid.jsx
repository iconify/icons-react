import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0dw-9b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0dw-9b1z"/>`,
		"fallback": "mynaui:arrow-up-right-square-solid",
	});
}

export default Component;
