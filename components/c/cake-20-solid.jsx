import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6l8k0bdh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6l8k0bdh"/>`,
		"fallback": "heroicons:cake-20-solid",
	});
}

export default Component;
