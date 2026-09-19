import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb52ahb-z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb52ahb-z"/>`,
		"fallback": "at-icons:chess-bishop",
	});
}

export default Component;
