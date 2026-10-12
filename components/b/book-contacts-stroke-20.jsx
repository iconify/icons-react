import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d43t32b4m.css';
import '../../css/y/y6ixysbct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d43t32b4m"/><path class="y6ixysbct"/>`,
		"fallback": "garden:book-contacts-stroke-20",
	});
}

export default Component;
