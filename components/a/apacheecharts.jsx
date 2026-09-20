import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihtgzd0ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihtgzd0ho"/>`,
		"fallback": "simple-icons:apacheecharts",
	});
}

export default Component;
