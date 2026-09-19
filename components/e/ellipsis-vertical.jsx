import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fjp7b0s.css';

const viewBox = {"width":128,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3fjp7b0s"/>`,
		"fallback": "fa6-solid:ellipsis-vertical",
	});
}

export default Component;
