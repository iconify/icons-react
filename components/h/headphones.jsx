import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux0zb6bks.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux0zb6bks"/>`,
		"fallback": "fa7-solid:headphones",
	});
}

export default Component;
