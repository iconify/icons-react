import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7q6n-bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7q6n-bve"/>`,
		"fallback": "bx:bx-space-bar",
	});
}

export default Component;
