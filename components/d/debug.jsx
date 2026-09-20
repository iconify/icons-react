import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk_1_t7py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk_1_t7py"/>`,
		"fallback": "pixelarticons:debug",
	});
}

export default Component;
