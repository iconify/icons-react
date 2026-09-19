import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk8gf1b0k.css';
import '../../css/w/wmb1cn7ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk8gf1b0k"/><path class="wmb1cn7ks"/>`,
		"fallback": "boxicons:contrast",
	});
}

export default Component;
