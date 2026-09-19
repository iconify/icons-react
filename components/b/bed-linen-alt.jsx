import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm8myvyyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm8myvyyo"/>`,
		"fallback": "griddy-icons:bed-linen-alt",
	});
}

export default Component;
