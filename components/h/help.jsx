import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkawcw3ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkawcw3ep"/>`,
		"fallback": "mdi:help",
	});
}

export default Component;
