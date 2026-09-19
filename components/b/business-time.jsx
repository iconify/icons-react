import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r595-ubef.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r595-ubef"/>`,
		"fallback": "fa-solid:business-time",
	});
}

export default Component;
