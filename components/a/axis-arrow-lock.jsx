import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkawrjb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkawrjb4i"/>`,
		"fallback": "mdi:axis-arrow-lock",
	});
}

export default Component;
