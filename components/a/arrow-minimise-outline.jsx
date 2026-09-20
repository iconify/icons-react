import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joeavmn4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joeavmn4v"/>`,
		"fallback": "typcn:arrow-minimise-outline",
	});
}

export default Component;
