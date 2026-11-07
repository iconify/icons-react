import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8eri-m2c.css';
import '../../css/c/c2xn2qjho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8eri-m2c"/><path class="c2xn2qjho"/>`,
		"fallback": "solar:bookmark-square-bold",
	});
}

export default Component;
