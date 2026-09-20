import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ropi4qb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ropi4qb6i"/>`,
		"fallback": "mdi:circle-medium",
	});
}

export default Component;
