import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q67wb5tzn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q67wb5tzn"/>`,
		"fallback": "si-glyph:clapboard",
	});
}

export default Component;
