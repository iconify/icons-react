import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh6cq-brc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh6cq-brc"/>`,
		"fallback": "pullo:border-top-bold",
	});
}

export default Component;
