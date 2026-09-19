import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofe-j50dh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofe-j50dh"/>`,
		"fallback": "si-glyph:circle-triangle-right",
	});
}

export default Component;
