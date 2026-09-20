import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-x6lpj1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-x6lpj1b"/>`,
		"fallback": "mdi:aquarium-outline",
	});
}

export default Component;
