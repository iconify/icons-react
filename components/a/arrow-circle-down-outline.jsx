import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt4kxjb1o.css';
import '../../css/w/wckr9kb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt4kxjb1o"/><path class="wckr9kb1z"/>`,
		"fallback": "eva:arrow-circle-down-outline",
	});
}

export default Component;
