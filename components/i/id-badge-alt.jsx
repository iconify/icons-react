import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0yqz5ohm.css';

const viewBox = {"width":2368,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0yqz5ohm"/>`,
		"fallback": "vs:id-badge-alt",
	});
}

export default Component;
