import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8xj8r15t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8xj8r15t"/>`,
		"fallback": "mdi:house-edit",
	});
}

export default Component;
