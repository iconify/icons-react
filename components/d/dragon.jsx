import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w32xxmbce.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w32xxmbce"/>`,
		"fallback": "fa6-solid:dragon",
	});
}

export default Component;
