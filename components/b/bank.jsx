import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzvs8lbph.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzvs8lbph"/>`,
		"fallback": "si-glyph:bank",
	});
}

export default Component;
