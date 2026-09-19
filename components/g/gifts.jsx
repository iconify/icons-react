import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi5crlb6r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi5crlb6r"/>`,
		"fallback": "fa6-solid:gifts",
	});
}

export default Component;
