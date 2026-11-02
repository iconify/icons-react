import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly5yssbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly5yssbjv"/>`,
		"fallback": "mingcute:book-audio-fill",
	});
}

export default Component;
