import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zig2q4ohe.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zig2q4ohe"/>`,
		"fallback": "si-glyph:arrow-down",
	});
}

export default Component;
