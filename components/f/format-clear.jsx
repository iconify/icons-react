import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq9vrlbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq9vrlbqv"/>`,
		"fallback": "mdi:format-clear",
	});
}

export default Component;
