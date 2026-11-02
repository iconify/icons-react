import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_1f4bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs_1f4bjf"/>`,
		"fallback": "mingcute:escalator-up-fill",
	});
}

export default Component;
