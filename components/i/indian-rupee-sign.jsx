import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akr445bcp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akr445bcp"/>`,
		"fallback": "fa7-solid:indian-rupee-sign",
	});
}

export default Component;
