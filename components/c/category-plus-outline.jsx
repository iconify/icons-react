import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zenee3cws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zenee3cws"/>`,
		"fallback": "mdi:category-plus-outline",
	});
}

export default Component;
