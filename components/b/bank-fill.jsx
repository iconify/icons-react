import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f13g02hns.css';
import '../../css/y/y_xfi-b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f13g02hns"/><path class="y_xfi-b0n"/>`,
		"fallback": "mingcute:bank-fill",
	});
}

export default Component;
