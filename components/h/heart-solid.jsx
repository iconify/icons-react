import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no_ee8bpr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no_ee8bpr"/>`,
		"fallback": "la:heart-solid",
	});
}

export default Component;
