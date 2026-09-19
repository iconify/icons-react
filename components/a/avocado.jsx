import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uppb44qmx.css';
import '../../css/b/bmbc7qb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uppb44qmx"/><ellipse class="bmbc7qb5c"/>`,
		"fallback": "circum:avocado",
	});
}

export default Component;
