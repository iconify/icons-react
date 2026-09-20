import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f08glvb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f08glvb0y"/>`,
		"fallback": "mingcute:back-fill",
	});
}

export default Component;
