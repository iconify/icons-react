import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neory07pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neory07pp"/>`,
		"fallback": "mingcute:clockwise-alt-line",
	});
}

export default Component;
