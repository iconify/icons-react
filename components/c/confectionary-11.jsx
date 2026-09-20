import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2586d8i.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2586d8i"/>`,
		"fallback": "maki:confectionary-11",
	});
}

export default Component;
