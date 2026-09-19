import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw7l1ccln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw7l1ccln"/>`,
		"fallback": "bx:bxl-slack-old",
	});
}

export default Component;
