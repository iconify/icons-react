import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay418-bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay418-bzm"/>`,
		"fallback": "mingcute:deer-line",
	});
}

export default Component;
