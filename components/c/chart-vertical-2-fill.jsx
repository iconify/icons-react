import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb5w3nb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb5w3nb2k"/>`,
		"fallback": "mingcute:chart-vertical-2-fill",
	});
}

export default Component;
