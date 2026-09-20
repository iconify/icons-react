import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omu4_-bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omu4_-bey"/>`,
		"fallback": "mdi:blood-plus-outline",
	});
}

export default Component;
