import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkkx_zjwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkkx_zjwl"/>`,
		"fallback": "mdi:aspect-ratio",
	});
}

export default Component;
