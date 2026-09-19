import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a17-j_b3w.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a17-j_b3w"/>`,
		"fallback": "si-glyph:fridge",
	});
}

export default Component;
