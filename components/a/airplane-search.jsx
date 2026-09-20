import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8ogv5b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8ogv5b9p"/>`,
		"fallback": "mdi:airplane-search",
	});
}

export default Component;
