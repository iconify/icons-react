import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdg5w6bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdg5w6bsi"/>`,
		"fallback": "bx:bx-plus",
	});
}

export default Component;
