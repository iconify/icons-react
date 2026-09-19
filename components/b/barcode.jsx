import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-nq93blj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-nq93blj"/>`,
		"fallback": "si-glyph:barcode",
	});
}

export default Component;
