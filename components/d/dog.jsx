import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4o9b8mlh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4o9b8mlh"/>`,
		"fallback": "si-glyph:dog",
	});
}

export default Component;
