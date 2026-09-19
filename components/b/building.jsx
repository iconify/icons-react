import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmsdd661s.css';
import '../../css/k/ktlmm7bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmsdd661s"/><path class="ktlmm7bml"/>`,
		"fallback": "bx:building",
	});
}

export default Component;
