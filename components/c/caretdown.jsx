import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6r3qwg2u.css';

const viewBox = {"width":16,"height":9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6r3qwg2u"/>`,
		"fallback": "formkit:caretdown",
	});
}

export default Component;
