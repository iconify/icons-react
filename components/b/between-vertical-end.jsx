import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y22acxb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y22acxb7e"/>`,
		"fallback": "boxicons:between-vertical-end",
	});
}

export default Component;
