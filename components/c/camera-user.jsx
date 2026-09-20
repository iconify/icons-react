import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k10ze3ubr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k10ze3ubr"/>`,
		"fallback": "mdi:camera-user",
	});
}

export default Component;
