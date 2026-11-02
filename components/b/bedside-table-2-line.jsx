import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3ifbpbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3ifbpbta"/>`,
		"fallback": "mingcute:bedside-table-2-line",
	});
}

export default Component;
