import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erpo6qb3i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erpo6qb3i"/>`,
		"fallback": "ep:arrow-left-bold",
	});
}

export default Component;
