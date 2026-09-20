import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f__kf5b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f__kf5b1p"/>`,
		"fallback": "mingcute:gradienter-fill",
	});
}

export default Component;
