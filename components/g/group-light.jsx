import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1n6r1x6q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1n6r1x6q"/>`,
		"fallback": "pullo:group-light",
	});
}

export default Component;
