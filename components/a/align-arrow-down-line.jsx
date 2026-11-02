import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k63c5w7qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k63c5w7qz"/>`,
		"fallback": "mingcute:align-arrow-down-line",
	});
}

export default Component;
