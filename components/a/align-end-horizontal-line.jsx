import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n70tk6bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n70tk6bly"/>`,
		"fallback": "mingcute:align-end-horizontal-line",
	});
}

export default Component;
