import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orl20abyt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orl20abyt"/>`,
		"fallback": "fa7-brands:brave",
	});
}

export default Component;
