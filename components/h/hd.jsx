import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1voi0bfp.css';
import '../../css/x/xudwaqqfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1voi0bfp"/><path class="xudwaqqfp"/>`,
		"fallback": "carbon:hd",
	});
}

export default Component;
