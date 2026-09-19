import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jals4jjxr.css';

const viewBox = {"width":408,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jals4jjxr"/>`,
		"fallback": "zmdi:flight-land",
	});
}

export default Component;
