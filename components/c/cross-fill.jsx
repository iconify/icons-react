import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwhh-p3kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwhh-p3kj"/>`,
		"fallback": "mingcute:cross-fill",
	});
}

export default Component;
