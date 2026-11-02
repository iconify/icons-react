import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fynacb6sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fynacb6sg"/>`,
		"fallback": "mingcute:bath-fill",
	});
}

export default Component;
