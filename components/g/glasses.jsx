import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-ez7b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-ez7b_l"/>`,
		"fallback": "griddy-icons:glasses",
	});
}

export default Component;
