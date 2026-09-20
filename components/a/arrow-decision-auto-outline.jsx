import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t24wsexbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t24wsexbe"/>`,
		"fallback": "mdi:arrow-decision-auto-outline",
	});
}

export default Component;
