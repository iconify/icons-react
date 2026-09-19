import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_29jxy7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_29jxy7m"/>`,
		"fallback": "fa-solid:headphones",
	});
}

export default Component;
