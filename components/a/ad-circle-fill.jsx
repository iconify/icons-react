import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz-gk04le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz-gk04le"/>`,
		"fallback": "mingcute:ad-circle-fill",
	});
}

export default Component;
