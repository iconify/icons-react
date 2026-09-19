import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7l9lfbbr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7l9lfbbr"/>`,
		"fallback": "fa7-brands:alipay",
	});
}

export default Component;
