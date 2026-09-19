import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4_w-d8ay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4_w-d8ay"/>`,
		"fallback": "carbon:app-connectivity",
	});
}

export default Component;
