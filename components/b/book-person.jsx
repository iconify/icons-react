import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nup4ibcwk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nup4ibcwk"/>`,
		"fallback": "si-glyph:book-person",
	});
}

export default Component;
