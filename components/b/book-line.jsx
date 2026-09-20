import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7r4x4eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7r4x4eu"/>`,
		"fallback": "ri:book-line",
	});
}

export default Component;
