import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6kdn1rcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6kdn1rcl"/>`,
		"fallback": "mingcute:flower-3-fill",
	});
}

export default Component;
