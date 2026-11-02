import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwzk0jram.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwzk0jram"/>`,
		"fallback": "mingcute:cigarette-fill",
	});
}

export default Component;
