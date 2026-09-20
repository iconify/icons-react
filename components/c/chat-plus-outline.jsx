import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huer_3mri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huer_3mri"/>`,
		"fallback": "mdi:chat-plus-outline",
	});
}

export default Component;
