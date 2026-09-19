import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2ndmjbtt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2ndmjbtt"/>`,
		"fallback": "fa7-brands:centercode",
	});
}

export default Component;
