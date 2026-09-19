import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydvc4w9ak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydvc4w9ak"/>`,
		"fallback": "si-glyph:golf-ball",
	});
}

export default Component;
