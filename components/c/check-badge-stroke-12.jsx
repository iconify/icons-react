import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv9yunb2u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv9yunb2u"/>`,
		"fallback": "garden:check-badge-stroke-12",
	});
}

export default Component;
