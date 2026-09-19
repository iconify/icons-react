import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9i8cmbrd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9i8cmbrd"/>`,
		"fallback": "si-glyph:arrow-triangle-recycle",
	});
}

export default Component;
