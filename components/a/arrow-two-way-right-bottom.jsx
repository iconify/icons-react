import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw5wg-jpn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw5wg-jpn"/>`,
		"fallback": "si-glyph:arrow-two-way-right-bottom",
	});
}

export default Component;
