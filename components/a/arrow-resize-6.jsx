import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2bpp-u5b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2bpp-u5b"/>`,
		"fallback": "si-glyph:arrow-resize-6",
	});
}

export default Component;
