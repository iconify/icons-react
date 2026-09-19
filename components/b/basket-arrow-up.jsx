import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic_j8siyi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic_j8siyi"/>`,
		"fallback": "si-glyph:basket-arrow-up",
	});
}

export default Component;
