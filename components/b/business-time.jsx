import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1y1abrr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el1y1abrr"/>`,
		"fallback": "fa6-solid:business-time",
	});
}

export default Component;
