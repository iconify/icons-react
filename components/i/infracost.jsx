import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yknpz0bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yknpz0bpr"/>`,
		"fallback": "thesvg-color:infracost",
	});
}

export default Component;
