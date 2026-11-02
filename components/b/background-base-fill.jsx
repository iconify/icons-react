import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8l04ubve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8l04ubve"/>`,
		"fallback": "mingcute:background-base-fill",
	});
}

export default Component;
