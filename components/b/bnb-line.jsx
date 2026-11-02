import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eauh11j5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eauh11j5q"/>`,
		"fallback": "mingcute:bnb-line",
	});
}

export default Component;
