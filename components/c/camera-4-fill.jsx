import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nabc9hbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nabc9hbtl"/>`,
		"fallback": "ri:camera-4-fill",
	});
}

export default Component;
