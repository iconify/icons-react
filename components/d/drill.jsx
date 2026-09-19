import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jph6_ql_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jph6_ql_q"/>`,
		"fallback": "hugeicons:drill",
	});
}

export default Component;
