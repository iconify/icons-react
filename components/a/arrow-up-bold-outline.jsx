import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7f-e8tjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7f-e8tjo"/>`,
		"fallback": "mdi:arrow-up-bold-outline",
	});
}

export default Component;
