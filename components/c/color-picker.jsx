import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4493zr5w.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4493zr5w"/>`,
		"fallback": "si-glyph:color-picker",
	});
}

export default Component;
