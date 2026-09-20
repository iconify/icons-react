import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oni-ybbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oni-ybbts"/>`,
		"fallback": "mdi:cards-playing-spade-multiple-outline",
	});
}

export default Component;
