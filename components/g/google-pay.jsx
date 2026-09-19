import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca0v-9y6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca0v-9y6e"/>`,
		"fallback": "cib:google-pay",
	});
}

export default Component;
