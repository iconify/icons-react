import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naj-5-b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naj-5-b_a"/>`,
		"fallback": "heroicons-outline:dots-circle-horizontal",
	});
}

export default Component;
