import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkvwa7bal.css';

const viewBox = {"width":1000,"height":285};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkvwa7bal"/>`,
		"fallback": "thesvg-color:bbc",
	});
}

export default Component;
