import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk09bee9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk09bee9e"/>`,
		"fallback": "mdi:heart-half-outline",
	});
}

export default Component;
