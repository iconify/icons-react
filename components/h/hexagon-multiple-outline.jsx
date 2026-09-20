import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw1x60bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw1x60bfb"/>`,
		"fallback": "mdi:hexagon-multiple-outline",
	});
}

export default Component;
