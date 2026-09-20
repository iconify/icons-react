import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cthmeyb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cthmeyb4u"/>`,
		"fallback": "mingcute:fan-direction-front-fill",
	});
}

export default Component;
