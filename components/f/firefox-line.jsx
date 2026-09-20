import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybpzd0btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybpzd0btt"/>`,
		"fallback": "mingcute:firefox-line",
	});
}

export default Component;
