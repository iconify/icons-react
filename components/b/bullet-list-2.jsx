import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q78n-474u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q78n-474u"/>`,
		"fallback": "si-glyph:bullet-list-2",
	});
}

export default Component;
