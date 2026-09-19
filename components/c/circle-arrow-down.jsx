import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z31hx9bit.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z31hx9bit"/>`,
		"fallback": "fa7-solid:circle-arrow-down",
	});
}

export default Component;
