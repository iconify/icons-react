import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv2f2z9dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv2f2z9dj"/>`,
		"fallback": "mdi:arrow-top-left-bold-outline",
	});
}

export default Component;
