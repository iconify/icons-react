import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw1q1ws-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw1q1ws-b"/>`,
		"fallback": "griddy-icons:headphones",
	});
}

export default Component;
