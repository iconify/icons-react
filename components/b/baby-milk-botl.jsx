import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_1eaeb-z.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_1eaeb-z"/>`,
		"fallback": "si-glyph:baby-milk-botl",
	});
}

export default Component;
