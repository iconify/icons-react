import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogk8lqiry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogk8lqiry"/>`,
		"fallback": "mdi:headphones",
	});
}

export default Component;
