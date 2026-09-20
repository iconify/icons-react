import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt-3sbkfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt-3sbkfm"/>`,
		"fallback": "mynaui:door-open",
	});
}

export default Component;
