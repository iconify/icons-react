import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8c01bogj.css';

const viewBox = {"width":17,"height":23};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8c01bogj"/>`,
		"fallback": "thesvg-color:bayzat",
	});
}

export default Component;
