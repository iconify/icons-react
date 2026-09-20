import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr6bf0bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr6bf0bqn"/>`,
		"fallback": "mynaui:ar",
	});
}

export default Component;
