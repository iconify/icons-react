import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsg-6dv6p.css';
import '../../css/q/quljz8buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsg-6dv6p"/><path class="quljz8buu"/>`,
		"fallback": "bx:bxs-user-account",
	});
}

export default Component;
