import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofkjq7b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofkjq7b1y"/>`,
		"fallback": "ri:arrow-right-double-fill",
	});
}

export default Component;
