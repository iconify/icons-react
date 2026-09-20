import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvaqon8oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvaqon8oy"/>`,
		"fallback": "ri:hearts-fill",
	});
}

export default Component;
