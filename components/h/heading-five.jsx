import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er-2y1b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er-2y1b7t"/>`,
		"fallback": "mynaui:heading-five",
	});
}

export default Component;
