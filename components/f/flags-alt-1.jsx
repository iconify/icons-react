import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6y1o92sp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6y1o92sp"/>`,
		"fallback": "lineicons:flags-alt-1",
	});
}

export default Component;
