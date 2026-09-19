import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiwlzdz7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiwlzdz7u"/>`,
		"fallback": "fe:calendar",
	});
}

export default Component;
