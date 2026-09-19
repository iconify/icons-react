import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjfwlht7x.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjfwlht7x"/>`,
		"fallback": "si-glyph:clover",
	});
}

export default Component;
