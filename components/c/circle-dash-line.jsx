import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q63a2rbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q63a2rbui"/>`,
		"fallback": "mingcute:circle-dash-line",
	});
}

export default Component;
