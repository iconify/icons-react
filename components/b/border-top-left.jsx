import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8tscxbur.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8tscxbur"/>`,
		"fallback": "fa6-solid:border-top-left",
	});
}

export default Component;
