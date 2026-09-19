import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi4brccjl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi4brccjl"/>`,
		"fallback": "fluent-mdl2:contact-heart",
	});
}

export default Component;
