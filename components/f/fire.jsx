import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0njri1ta.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0njri1ta"/>`,
		"fallback": "si-glyph:fire",
	});
}

export default Component;
