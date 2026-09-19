import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbkscvbvh.css';

const viewBox = {"width":280,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbkscvbvh"/>`,
		"fallback": "zmdi:arrow-merge",
	});
}

export default Component;
