import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgw-p5f4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgw-p5f4b"/>`,
		"fallback": "mdi:airplane-train",
	});
}

export default Component;
