import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7q-v7b5t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7q-v7b5t"/>`,
		"fallback": "si-glyph:hamburger",
	});
}

export default Component;
