import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev36-ybhy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev36-ybhy"/>`,
		"fallback": "fa7-brands:codiepie",
	});
}

export default Component;
