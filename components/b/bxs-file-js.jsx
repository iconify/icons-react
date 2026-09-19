import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni9m4wqxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni9m4wqxj"/>`,
		"fallback": "bx:bxs-file-js",
	});
}

export default Component;
