import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks8-j5qct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks8-j5qct"/>`,
		"fallback": "bx:bx-user-check",
	});
}

export default Component;
