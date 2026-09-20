import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lon5l2byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lon5l2byo"/>`,
		"fallback": "mynaui:heading-4",
	});
}

export default Component;
