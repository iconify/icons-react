import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1vo3dvof.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1vo3dvof"/>`,
		"fallback": "fa-solid:dice",
	});
}

export default Component;
