import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltaqgc20o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltaqgc20o"/>`,
		"fallback": "ri:health-book-line",
	});
}

export default Component;
