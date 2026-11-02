import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4pa2sbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4pa2sbko"/>`,
		"fallback": "mingcute:hotel-fill",
	});
}

export default Component;
