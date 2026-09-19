import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_zvdpf8x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_zvdpf8x"/>`,
		"fallback": "fa7-brands:cc-apple-pay",
	});
}

export default Component;
