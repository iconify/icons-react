import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr76i0hug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr76i0hug"/>`,
		"fallback": "eva:activity-outline",
	});
}

export default Component;
