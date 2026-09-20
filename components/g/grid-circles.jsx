import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c11lxbcko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c11lxbcko"/>`,
		"fallback": "keyline-icons:grid-circles",
	});
}

export default Component;
