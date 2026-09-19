import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn95y1o2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jn95y1o2u"/>`,
		"fallback": "iconamoon:arrow-top-left-4-square-fill",
	});
}

export default Component;
