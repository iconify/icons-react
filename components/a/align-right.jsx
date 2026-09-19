import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcyt4bref.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcyt4bref"/>`,
		"fallback": "si-glyph:align-right",
	});
}

export default Component;
