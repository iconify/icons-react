import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfb41c2xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfb41c2xn"/>`,
		"fallback": "thesvg-color:camunda",
	});
}

export default Component;
