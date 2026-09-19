import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3349nbja.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3349nbja"/>`,
		"fallback": "si-glyph:arrow-two-left-right",
	});
}

export default Component;
