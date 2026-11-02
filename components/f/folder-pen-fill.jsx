import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m46l96acm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m46l96acm"/>`,
		"fallback": "mingcute:folder-pen-fill",
	});
}

export default Component;
