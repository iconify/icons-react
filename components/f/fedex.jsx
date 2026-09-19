import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9ga7w1cj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9ga7w1cj"/>`,
		"fallback": "fa7-brands:fedex",
	});
}

export default Component;
