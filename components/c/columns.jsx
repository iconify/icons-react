import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saj1t_9ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saj1t_9ca"/>`,
		"fallback": "mynaui:columns",
	});
}

export default Component;
