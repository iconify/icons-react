import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8rgxcbzb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8rgxcbzb"/>`,
		"fallback": "fa6-brands:google-plus-g",
	});
}

export default Component;
