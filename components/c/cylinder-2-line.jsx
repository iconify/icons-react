import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2qb3-bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2qb3-bqo"/>`,
		"fallback": "mingcute:cylinder-2-line",
	});
}

export default Component;
