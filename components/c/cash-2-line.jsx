import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc7lxnfds.css';
import '../../css/u/u-06obvoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc7lxnfds"/><path class="u-06obvoh"/>`,
		"fallback": "mingcute:cash-2-line",
	});
}

export default Component;
