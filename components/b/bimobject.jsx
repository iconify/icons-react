import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5p-6bqb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5p-6bqb"/>`,
		"fallback": "fa7-brands:bimobject",
	});
}

export default Component;
