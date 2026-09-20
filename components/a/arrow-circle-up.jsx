import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yurwaccmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yurwaccmo"/>`,
		"fallback": "uis:arrow-circle-up",
	});
}

export default Component;
