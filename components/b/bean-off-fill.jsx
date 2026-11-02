import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4n1m4bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4n1m4bxr"/>`,
		"fallback": "mingcute:bean-off-fill",
	});
}

export default Component;
