import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hez8wsb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hez8wsb3q"/>`,
		"fallback": "ri:battery-low-line",
	});
}

export default Component;
