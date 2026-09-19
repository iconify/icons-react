import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf69wm-ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf69wm-ag"/>`,
		"fallback": "bx:bx-dots-horizontal",
	});
}

export default Component;
