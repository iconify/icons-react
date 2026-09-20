import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx0bnddyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vx0bnddyz"/>`,
		"fallback": "solar:code-circle-bold",
	});
}

export default Component;
