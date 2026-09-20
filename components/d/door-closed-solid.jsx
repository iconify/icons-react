import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1m-6qb3m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1m-6qb3m"/>`,
		"fallback": "la:door-closed-solid",
	});
}

export default Component;
