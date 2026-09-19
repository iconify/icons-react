import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y23bmpb1o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y23bmpb1o"/>`,
		"fallback": "fa7-solid:bath",
	});
}

export default Component;
