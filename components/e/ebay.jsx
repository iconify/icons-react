import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9pa2g-6t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9pa2g-6t"/>`,
		"fallback": "fa7-brands:ebay",
	});
}

export default Component;
