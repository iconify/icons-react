import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm3w0vbff.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm3w0vbff"/>`,
		"fallback": "si-glyph:book-1",
	});
}

export default Component;
