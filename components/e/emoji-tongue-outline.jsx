import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llqv21b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llqv21b5h"/>`,
		"fallback": "mdi:emoji-tongue-outline",
	});
}

export default Component;
