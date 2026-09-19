import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ny6yqxn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ny6yqxn"/>`,
		"fallback": "si-glyph:baby-troller",
	});
}

export default Component;
