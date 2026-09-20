import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4_xc7txx.css';

const viewBox = {"width":104.5,"height":68};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4_xc7txx"/>`,
		"fallback": "thesvg-color:babbel",
	});
}

export default Component;
