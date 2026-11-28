import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk51ae0zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk51ae0zo"/>`,
		"fallback": "noviair-light:chevrons-up",
	});
}

export default Component;
