import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akm6_1a0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akm6_1a0s"/>`,
		"fallback": "mdi:emoji-happy",
	});
}

export default Component;
