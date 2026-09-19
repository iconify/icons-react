import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8a-ns-2m.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8a-ns-2m"/>`,
		"fallback": "si-glyph:hospital",
	});
}

export default Component;
