import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcgcscb1p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcgcscb1p"/>`,
		"fallback": "si-glyph:chart-column-increase",
	});
}

export default Component;
