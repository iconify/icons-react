import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klav2xwns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klav2xwns"/>`,
		"fallback": "mdi:arrow-right-top-bold",
	});
}

export default Component;
