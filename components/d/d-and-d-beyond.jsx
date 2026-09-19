import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otk7xqulb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otk7xqulb"/>`,
		"fallback": "fa-brands:d-and-d-beyond",
	});
}

export default Component;
