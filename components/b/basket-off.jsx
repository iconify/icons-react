import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggj0uge_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggj0uge_j"/>`,
		"fallback": "mdi:basket-off",
	});
}

export default Component;
