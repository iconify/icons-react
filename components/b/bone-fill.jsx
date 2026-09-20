import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tudn0h4za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tudn0h4za"/>`,
		"fallback": "mingcute:bone-fill",
	});
}

export default Component;
