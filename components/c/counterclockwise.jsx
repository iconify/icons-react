import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-1pkbwz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-1pkbwz"/>`,
		"fallback": "roentgen:counterclockwise",
	});
}

export default Component;
