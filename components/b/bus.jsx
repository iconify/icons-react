import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adicnclgj.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adicnclgj"/>`,
		"fallback": "jam:bus",
	});
}

export default Component;
