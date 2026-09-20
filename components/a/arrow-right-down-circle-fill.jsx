import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n17e6j3vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n17e6j3vn"/>`,
		"fallback": "mingcute:arrow-right-down-circle-fill",
	});
}

export default Component;
