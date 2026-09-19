import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp83pzo0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp83pzo0i"/>`,
		"fallback": "si-glyph:bicycle-3",
	});
}

export default Component;
