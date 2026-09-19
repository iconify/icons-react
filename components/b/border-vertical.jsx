import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1zkx-b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1zkx-b_q"/>`,
		"fallback": "hugeicons:border-vertical",
	});
}

export default Component;
