import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-h60obbh.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-h60obbh"/>`,
		"fallback": "lineicons:arrow-angular-top-left",
	});
}

export default Component;
