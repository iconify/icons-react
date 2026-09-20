import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeoh0rbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeoh0rbfe"/>`,
		"fallback": "uil:grin-tongue-wink-alt",
	});
}

export default Component;
