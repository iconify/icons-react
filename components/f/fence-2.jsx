import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uio_1y2lc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uio_1y2lc"/>`,
		"fallback": "si-glyph:fence-2",
	});
}

export default Component;
