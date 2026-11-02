import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwdt7uach.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwdt7uach"/>`,
		"fallback": "mingcute:between-vertical-start-fill",
	});
}

export default Component;
