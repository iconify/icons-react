import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yci3bsb0r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yci3bsb0r"/>`,
		"fallback": "fa7-solid:dot-circle",
	});
}

export default Component;
