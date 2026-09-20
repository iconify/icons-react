import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nolwi1iyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nolwi1iyz"/>`,
		"fallback": "ri:cloud-windy-line",
	});
}

export default Component;
