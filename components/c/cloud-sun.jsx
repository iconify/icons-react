import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxkr8sagi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxkr8sagi"/>`,
		"fallback": "noviair:cloud-sun",
	});
}

export default Component;
