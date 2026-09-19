import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s89t19bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s89t19bwm"/>`,
		"fallback": "bx:bxs-user-x",
	});
}

export default Component;
