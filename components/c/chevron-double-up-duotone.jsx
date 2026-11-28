import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/folet6ddy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="folet6ddy primary"/>`,
		"fallback": "iconaut:chevron-double-up-duotone",
	});
}

export default Component;
