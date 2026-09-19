import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tolvt1byo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tolvt1byo"/>`,
		"fallback": "si-glyph:arrow-up",
	});
}

export default Component;
