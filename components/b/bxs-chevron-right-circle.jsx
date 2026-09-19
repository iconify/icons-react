import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qopmer22v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qopmer22v"/>`,
		"fallback": "bx:bxs-chevron-right-circle",
	});
}

export default Component;
