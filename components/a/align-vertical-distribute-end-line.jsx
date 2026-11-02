import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq5lvnzqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq5lvnzqh"/>`,
		"fallback": "mingcute:align-vertical-distribute-end-line",
	});
}

export default Component;
