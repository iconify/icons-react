import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4j8ldbij.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4j8ldbij"/>`,
		"fallback": "subway:hulf-of-circle-2",
	});
}

export default Component;
