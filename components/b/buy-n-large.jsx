import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h24t9d8sz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h24t9d8sz"/>`,
		"fallback": "fa7-brands:buy-n-large",
	});
}

export default Component;
