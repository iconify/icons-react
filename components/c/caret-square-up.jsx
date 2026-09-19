import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjtmj6bop.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjtmj6bop"/>`,
		"fallback": "fa-regular:caret-square-up",
	});
}

export default Component;
