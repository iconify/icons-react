import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv83v9bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv83v9bhs"/>`,
		"fallback": "mdi:eruption-outline",
	});
}

export default Component;
