import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyfy9yb6j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyfy9yb6j"/>`,
		"fallback": "si-glyph:hat-chef",
	});
}

export default Component;
