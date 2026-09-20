import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xubqcf4ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xubqcf4ho"/>`,
		"fallback": "mdi:fridge-bottom",
	});
}

export default Component;
