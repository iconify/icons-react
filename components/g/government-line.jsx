import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr49v0bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr49v0bov"/>`,
		"fallback": "mingcute:government-line",
	});
}

export default Component;
