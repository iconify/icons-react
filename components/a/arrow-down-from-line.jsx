import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-yxi3umn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-yxi3umn"/>`,
		"fallback": "hugeicons:arrow-down-from-line",
	});
}

export default Component;
