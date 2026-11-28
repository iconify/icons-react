import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_7_3len.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_7_3len"/>`,
		"fallback": "noviair:air-conditioner-x",
	});
}

export default Component;
