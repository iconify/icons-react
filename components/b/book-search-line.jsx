import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caph1n78r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caph1n78r"/>`,
		"fallback": "mingcute:book-search-line",
	});
}

export default Component;
