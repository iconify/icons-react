import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ago6k6csm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ago6k6csm"/>`,
		"fallback": "si-glyph:biscuit",
	});
}

export default Component;
