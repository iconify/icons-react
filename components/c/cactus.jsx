import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1naxb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in1naxb9j"/>`,
		"fallback": "hugeicons:cactus",
	});
}

export default Component;
