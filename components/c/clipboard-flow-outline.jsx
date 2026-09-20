import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbf406y8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbf406y8q"/>`,
		"fallback": "mdi:clipboard-flow-outline",
	});
}

export default Component;
