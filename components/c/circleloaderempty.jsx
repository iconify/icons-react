import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybzb3qb6q.css';

const viewBox = {"width":896,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybzb3qb6q"/>`,
		"fallback": "whh:circleloaderempty",
	});
}

export default Component;
