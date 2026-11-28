import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz8njvb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz8njvb1y"/>`,
		"fallback": "noviair:bookmark-star",
	});
}

export default Component;
