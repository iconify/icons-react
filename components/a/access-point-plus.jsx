import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_c93jb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_c93jb6t"/>`,
		"fallback": "mdi:access-point-plus",
	});
}

export default Component;
