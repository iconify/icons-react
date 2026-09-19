import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi1_wzkmx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi1_wzkmx"/>`,
		"fallback": "si-glyph:bell",
	});
}

export default Component;
