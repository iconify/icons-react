import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlbt_t9qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlbt_t9qe"/>`,
		"fallback": "mingcute:circle-user-fill",
	});
}

export default Component;
