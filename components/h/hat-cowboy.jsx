import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6wl0r5te.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6wl0r5te"/>`,
		"fallback": "fa-solid:hat-cowboy",
	});
}

export default Component;
